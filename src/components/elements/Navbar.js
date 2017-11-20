import React, { Component } from 'react'
import '../../styles/Navbar.css'
import Icon from 'react-fontawesome'

class Navbar extends Component {
  render () {
    return (
      <div className='Navbar'>
        <span className='title'>
          <span>PubSpinner </span>
          <Icon name='beer' />
        </span>
      </div>
    )
  }
}

export default Navbar
