import React from 'react'
import { View, Text } from 'react-native'
import { containers, headers } from '../styles/styles'

class Lists extends React.Component {
  render () {
    return (
      <View style={containers.central}>
        <Text style={headers.h1}>My Lists!</Text>
        <Text>See your previous venue lists</Text>
      </View>
    )
  }
}

export default Lists
