import React, { Component } from 'react'
import '../../styles/Footer.css'

class Footer extends Component {
  render () {
    return (
      <div className='Footer'>
        <span className='copyright'>&#169; Jamie Lynch 2017</span>
        <span className='links'>
          <a href='https://github.com/jamie-lynch/pub-spinner'><img src='github.png' alt='Github Logo' /></a>
        </span>
      </div>
    )
  }
}

export default Footer
