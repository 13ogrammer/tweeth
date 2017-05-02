import React, { Component, PropTypes } from 'react'
import { Field } from 'redux-form'

import { AutoComplete, TextField } from 'redux-form-material-ui'
import { Col } from 'react-flexbox-grid/lib/index'
import RaisedButton from 'material-ui/RaisedButton'

export class SendCoin extends Component {

  render () {
    const { accounts, handleSubmit, submitTransaction } = this.props

    return (
      <Col xs={10} sm={6} md={5} lg={3}>
        <h2>Send Coin</h2>
        <form onSubmit={handleSubmit(submitTransaction)}>
          <Field name='address'
            floatingLabelText='Account'
            component={AutoComplete}
            dataSource={accounts}
          />
          <Field name='amount'
            type='number'
            component={TextField}
            floatingLabelText='Amount'
          />
          <br />
          <RaisedButton
            primary
            type='submit'
            label='Submit' />
        </form>
      </Col>
    )
  }
}

SendCoin.propTypes = {
  accounts: PropTypes.array,
  handleSubmit: PropTypes.func,
  submitTransaction: PropTypes.func
}

export default SendCoin
