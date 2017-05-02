import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/index'

import Header from '../containers/HeaderContainer'
import CoinCount from '../containers/CoinCountContainer'
import SendCoin from '../containers/SendCoinContainer'

export class Layout extends Component {

  componentWillMount () {
    if (this.props.isConnected) {
      this.props.getBalance({ account: this.props.accounts[0] })
    }
  }

  render () {
    return (
      <Col>
        <Row center='xs'><Header /></Row>
        <Row center='xs'><CoinCount /></Row>
        <Row center='xs'><SendCoin /></Row>
      </Col>
    )
  }
}

Layout.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  getBalance: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired
}

export default Layout
