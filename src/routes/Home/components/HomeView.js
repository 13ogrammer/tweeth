import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { Row } from 'react-flexbox-grid/lib/index'

export const HomeView = () => (
  <div>
    <Row center='xs'>
      <h4>Welcome!</h4>
    </Row>
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />
  </div>
)

export default HomeView
