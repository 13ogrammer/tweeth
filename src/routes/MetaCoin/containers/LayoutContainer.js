import { connect } from 'react-redux'

import { getBalance } from '../modules/metaCoinModule'

import Layout from '../components/Layout'

const mapDispatchToProps = {
  getBalance
}

const mapStateToProps = (state) => ({
  isConnected: state.web3Wrap.isConnected,
  accounts: (state.web3Wrap.web3 && state.web3Wrap.web3.eth) ? state.web3Wrap.web3.eth.accounts : []
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
