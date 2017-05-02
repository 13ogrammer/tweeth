import MetaCoinArtifact from '../../../../contracts/MetaCoin.sol'
import contract from 'truffle-contract'
const MetaCoin = contract(MetaCoinArtifact)

// ------------------------------------
// Constants
// ------------------------------------
export const SEND_COIN = 'SEND_COIN'
export const GET_BALANCE_IN_ETH = 'GET_BALANCE_IN_ETH'
export const GET_BALANCE = 'GET_BALANCE'
export const SET_BALANCE = 'SET_BALANCE'

// ------------------------------------
// helpers
// ------------------------------------
const getMetaCoin = ({ getState }) => {
  MetaCoin.setProvider(getState().web3Wrap.web3.currentProvider)
  return MetaCoin.deployed()
}

const getDefaultAccount = ({ getState }) => {
  return getState().web3Wrap.web3.eth.accounts[0]
}

// ------------------------------------
// Actions
// ------------------------------------
export const sendCoin = ({ amount, address }) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      let meta = null
      let from = null
      getMetaCoin({ getState })
        .then(instance => {
          meta = instance
          from = getDefaultAccount({ getState })
          return meta.sendCoin(address, amount, { from })
        })
        .then(() => {
          return meta.getBalance.call(from, { from })
        })
        .then(value => {
          dispatch({
            type: SET_BALANCE,
            payload: { value: value.valueOf() }
          })
          resolve()
        })
        .catch(e => {
          console.log(e)
        })
    })
  }
}

export const getBalanceInEth = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      dispatch({
        type: GET_BALANCE_IN_ETH,
        payload: {}
      })
      resolve()
    })
  }
}

export const getBalance = ({ account }) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      getMetaCoin({ getState })
      .then(instance => {
        return instance
      })
      .then(meta => {
        return meta.getBalance.call(account, { from: account })
      })
      .then(function (value) {
        dispatch({
          type: SET_BALANCE,
          payload: { account, value: value.valueOf() }
        })
        resolve()
      }).catch(function (e) {
        console.log(e)
        reject()
      })
    })
  }
}

export const actions = {
  sendCoin,
  getBalanceInEth,
  getBalance
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_BALANCE]: (state, action) => {
    return Object.assign({}, state, action.payload)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { account: null, value: '0' }
export default function MetaCoinReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
