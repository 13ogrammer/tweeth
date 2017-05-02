import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import locationReducer from './location'
import web3Reducer from './web3Reducer'
import MyDrawerReducer from '../components/Drawer/MyDrawerModule'
import MyTopBarReducer from '../components/topBar/topBarModule'
import MetaCoinReducer from '../routes/MetaCoin/modules/metaCoinModule'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    drawerState: MyDrawerReducer,
    topBarState: MyTopBarReducer,
    web3Wrap: web3Reducer,
    metaCoin: MetaCoinReducer,
    location: locationReducer,
    form: formReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
