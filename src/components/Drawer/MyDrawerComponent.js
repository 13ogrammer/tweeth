import React from 'react'
import './Drawer.scss'
import { IndexLink, Link } from 'react-router'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Subheader from 'material-ui/Subheader'

let leftNavTop = {
  fontSize: '24px',
  color: 'rgb(255, 255, 255)',
  lineHeight: '64px',
  fontWeight: 300,
  backgroundColor: 'rgb(0, 188, 212)',
  paddingLeft: '24px',
  marginBottom: '8px'
}

export const MyDrawer = (props) => (
  <Drawer open={props.open} docked={false} onRequestChange={() => props.toggleDrawer()}>
    <Subheader style={leftNavTop} >Navigation</Subheader>
    <IndexLink to='/' activeClassName='route--active' style={{ 'textDecoration': 'none' }}>
      <MenuItem
        primaryText='Home'
        onTouchTap={() => { props.toggleDrawer() }} />
    </IndexLink>
    <Link to='/counter' activeClassName='route--active' style={{ 'textDecoration': 'none' }}>
      <MenuItem
        primaryText='Counter'
        onTouchTap={() => { props.toggleDrawer() }} />
    </Link>
    <Link to='/metacoin' activeClassName='route--active' style={{ 'textDecoration': 'none' }}>
      <MenuItem
        primaryText='Meta Coin'
        onTouchTap={() => { props.toggleDrawer() }} />
    </Link>
  </Drawer>
)

MyDrawer.propTypes = {
  open: React.PropTypes.bool.isRequired,
  toggleDrawer: React.PropTypes.func.isRequired
}

export default MyDrawer
