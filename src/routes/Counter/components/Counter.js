import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import { Row } from 'react-flexbox-grid/lib/index'

export const Counter = (props) => (
  <Row center='xs'>
    <div >
      <h2>Counter: {props.counter}</h2>
      <RaisedButton label='Increment' onClick={props.increment} />
      {' '}
      <RaisedButton label='Double (Async)' onClick={props.doubleAsync} />
    </div>
  </Row>
)

Counter.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Counter
