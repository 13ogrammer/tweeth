import { connect } from 'react-redux'

import CoinCount from '../components/CoinCount'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  isConnected: state.web3Wrap.isConnected,
  balance: state.metaCoin.value
})

export default connect(mapStateToProps, mapDispatchToProps)(CoinCount)
