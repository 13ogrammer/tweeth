import React, { Component } from 'react'
import './CoreLayout.scss'
import '../../styles/core.scss'

import TopBar from '../../components/topBar'
import MyDrawer from '../../components/Drawer'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'

export class CoreLayout extends Component {

  componentWillMount () {
    this.props.web3Connect() // check if web3 exists. metamask compatibility
  }

  render () {
    const { children } = this.props
    return (
      <div>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <TopBar />
          </Col>
        </Row>
        <Grid fluid>
          <div style={{ height: '100%', margin: 0, padding: 0 }}>
            <MyDrawer />
          </div>
          <Col xs={12} sm={12} md={12} lg={12}>
            {children}
          </Col>
        </Grid>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
  web3Connect: React.PropTypes.func.isRequired
}

export default CoreLayout
