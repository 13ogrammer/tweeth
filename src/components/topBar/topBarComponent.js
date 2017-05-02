import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import CloudOff from 'material-ui/svg-icons/file/cloud-off'
import CheckCircle from 'material-ui/svg-icons/action/check-circle'

const rightIndicator = {
  marginRight: 12,
  display: 'inline-block'
}

export class TopBar extends Component {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  setDialog = (isConnected) => {
    const actions = [
      <FlatButton
        label='Close'
        primary
        onTouchTap={this.handleClose}
      />
    ]
    let title, body
    /*eslint-disable */
    if (isConnected) {
      title = 'Success is successful!'
      body = (<span>Yay! We are attached to an ethereum node!</span>)
    } else {
      title = 'Please Connect to an ethereum node'
      body = (<span>Unable to connect to etherum, please install <a href="https://metamask.io/">MetaMask</a> to use this application.</span>)
    }
    /*eslint-enable */
    return (<Dialog
      title={title}
      actions={actions}
      modal={false}
      open={this.state.open}
      onRequestClose={this.handleClose}>
      {body}
    </Dialog>)
  }

  render () {
    let { openDrawer, title, web3Wrap } = this.props

    let rightIcon = (web3Wrap.isConnected) ? (<CheckCircle />) : (<CloudOff />)
    let dialogShown = this.setDialog(web3Wrap.isConnected)
    let rightComponent = (
      <div>
        <FloatingActionButton mini secondary style={rightIndicator} onTouchTap={this.handleOpen}>
          {rightIcon}
          {dialogShown}
        </FloatingActionButton>
      </div>
    )

    return (
      <AppBar
        title={title}
        zDepth={0}
        iconClassNameLeft=''
        onLeftIconButtonTouchTap={() => { openDrawer() }}
        iconElementRight={rightComponent}
      />
    )
  }
}

TopBar.propTypes = {
  openDrawer: React.PropTypes.func.isRequired,
  title: React.PropTypes.string,
  web3Wrap: React.PropTypes.object.isRequired
}

export default TopBar
