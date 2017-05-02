// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import CounterRoute from './Counter'
import MetaCoinRoute from './MetaCoin'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    CounterRoute(store),
    MetaCoinRoute(store)
  ]
})

export default createRoutes
