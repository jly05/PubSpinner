import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../styles/Spinner.css'

class Spinner extends Component {
  constructor (props) {
    super(props)

    this.spin = this.spin.bind(this)

    this.state = {
      options: this.props.options,
      chosen: null,
      spinning: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.options !== nextProps.options) {
      this.setState({options: nextProps.options})
    }
  }

  spin () {
    this.setState({spinning: true})

    setTimeout(() => {
      let index = Math.round(Math.random() * this.state.options.length - 1)
      let chosen = this.state.options[index]
      this.setState({
        chosen,
        spinning: false
      })
    }, 1500)
  }

  render () {
    let btnText
    if (this.state.spinning) {
      btnText = 'Spinning...'
    } else if (this.state.chosen) {
      btnText = 'Spin Again'
    } else {
      btnText = 'Spin Me'
    }

    return (
      <div className='Spinner'>
        <span>{this.state.chosen || 'Spin to find out'}</span>
        <br />
        <button className='spinBtn' onClick={this.spin} disabled={this.state.spinning}>{btnText}</button>
      </div>
    )
  }
}

Spinner.propTypes = {
  options: PropTypes.array.isRequired
}

export default Spinner
