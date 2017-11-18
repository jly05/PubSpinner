import React, { Component } from 'react'
import '../styles/App.css'
import Navbar from './elements/Navbar'
import Footer from './elements/Footer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
        <Footer />
      </div>
    )
  }
}

export default App
