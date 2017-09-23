import React from 'react'
import { View, Text, Button } from 'react-native'
import { containers, headers } from '../styles/styles'

class Spinner extends React.Component {
  constructor () {
    super()

    this.selectVenue = this.selectVenue.bind(this)

    this.state = {
      currentList: null,
      currentVenue: null,
      venues: []
    }
  }

  selectVenue () {

  }

  render () {
    return (
      <View style={containers.outer}>
        <View>
          <Text style={headers.h1}>Welcome to PubSpinner!</Text>
          <Text>A handy app to help you choose an establishment.</Text>
        </View>
        <View>
          <Button
            onPress={this.selectVenue}
            title={this.state.currentVenue ? 'Spin Again' : 'Spin'}
            accessibilityLabel='Have a spin and find out where to go'
          />
        </View>
      </View>
    )
  }
}

export default Spinner
