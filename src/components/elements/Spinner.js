import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../styles/Spinner.css'
import {sleep} from '../../helpers'

class Spinner extends Component {
  constructor (props) {
    super(props)

    this.spin = this.spin.bind(this)

    this.state = {
      options: this.props.options,
      spinning: false,
      chosenIndex: null,
      highlightIndex: null
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.options !== nextProps.options) {
      this.setState({
        options: nextProps.options,
        chosenIndex: null,
        highlightIndex: null
      })
    }
  }

  async spin () {
    this.setState({
      spinning: true,
      chosenIndex: false
    })

    let i = 0
    let order = []
    let index

    // If there's already an item chosen then make sure the first index isn't the same as that one
    // Otherwise, just add any valid index so that we can use i-1 in the while loop
    if (this.state.chosenIndex) {
      while (true) {
        index = Math.round(Math.random() * (this.state.options.length - 1))
        if (index !== this.state.chosenIndex) {
          order.push(index)
          i++
          break
        }
      }
    } else {
      order.push(Math.round(Math.random() * (this.state.options.length - 1)))
      i++
    }

    // Add a load of random indices, ensuring that you don't add the same one
    // twice in a row
    while (i < 15) {
      index = Math.round(Math.random() * (this.state.options.length - 1))
      if (index !== order[i - 1]) {
        order.push(index)
        i++
      }
    }

    for (i = 0; i < order.length - 1; i++) {
      this.setState({highlightIndex: order[i]})
      await sleep(150)
    }

    this.setState({
      highlightIndex: null,
      chosenIndex: order[order.length - 1],
      spinning: false
    })
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
        <div className='spinContainer'>
          {
            this.state.options.map((option, index) => {
              return (
                <div key={index} className={`spinItem${this.state.chosenIndex === option ? ' chosen' : ''}${this.state.highlightIndex === index ? ' higlight' : ''}`}>
                  {option}
                </div>
              )
            })
          }
        </div>
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
