import { connect } from 'react-redux'
import { openDrawer } from '../Drawer/MyDrawerModule'
import TopBar from './topBarComponent'

const mapDispatchToProps = {
  openDrawer
}

const mapStateToProps = (state) => ({
  title: state.topBarState.title,
  web3Wrap: state.web3Wrap,
  balance: state.metaCoin
})

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
