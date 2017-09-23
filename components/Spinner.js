import React from 'react'
import { View, Text } from 'react-native'
import { containers, headers } from '../styles/styles'

class Spinner extends React.Component {
  render () {
    return (
      <View style={containers.central}>
        <Text style={headers.h1}>Welcome to PubSpinner!</Text>
        <Text>A handy app to help you choose an establishment.</Text>
      </View>
    )
  }
}

export default Spinner
