import React, { Component } from 'react'
import '../styles/App.css'
import Navbar from './elements/Navbar'
import Spinner from './elements/Spinner'
import Footer from './elements/Footer'

class App extends Component {
  render () {
    let options = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
      <div className='App'>
        <Navbar />
        <Spinner options={options} />
        <Footer />
      </div>
    )
  }
}

export default App
