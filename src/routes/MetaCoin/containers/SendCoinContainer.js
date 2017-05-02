import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import SendCoin from '../components/SendCoin'
import { sendCoin as sendCoinFn } from '../modules/metaCoinModule'

const validate = values => {
  const errors = {}
  if (!values.address) {
    errors.address = 'Required'
  } else if (values.address.length < 40) {
    errors.address = 'Must be 32 characters or less'
  }

  if (!values.amount) {
    errors.amount = 'Required'
  } else if (isNaN(Number(values.amount))) {
    errors.amount = 'Must be a number'
  }
  return errors
}

const warn = values => { // todo add warnings if desired
  const warnings = {}
  return warnings
}

const mapDispatchToProps = {
  submitTransaction: sendCoinFn
}

const mapStateToProps = (state) => ({
  accounts: (state.web3Wrap.web3 && state.web3Wrap.web3.eth) ? state.web3Wrap.web3.eth.accounts : []
})

export default reduxForm({
  form: 'sendCoins',
  validate,
  warn
})(connect(mapStateToProps, mapDispatchToProps)(SendCoin))
