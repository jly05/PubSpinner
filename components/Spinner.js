import React from 'react'
import { View, Text, Button, StatusBar, Dimensions } from 'react-native'
import { containers, headers, borders } from '../styles/styles'

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
    this.setState(prevState => {
      return { currentVenue: prevState.venues[Math.floor(Math.random() * prevState.venues.length)] }
    })
  }

  render () {
    let {height, width} = Dimensions.get('window')
    var marginStyle = {
      flex: 1,
      marginTop: StatusBar.currentHeight + (height * 0.02),
      marginBottom: (height * 0.05)
    }
    var spinnerStyle = {
      height: height * 0.4,
      width: width * 0.8,
      justifyContent: 'center',
      alignItems: 'center'
    }
    var fullWidth = {
      width: width * 0.8
    }
    var fullWidthCentered = {
      width: width * 0.8,
      justifyContent: 'center',
      alignItems: 'center'
    }
    return (
      <View style={marginStyle}>
        <View style={containers.outer}>
          <View className='header'>
            <Text style={headers.h1}>Pub Spinner</Text>
          </View>
          <View style={borders.solidBlackOne}>
            <View className='spinner' style={spinnerStyle}>
              <Text>{this.state.currentVenue || 'Spin to find out'}</Text>
            </View>
          </View>
          <View className='spinButton' style={fullWidth}>
            <Button
              onPress={this.selectVenue}
              title={this.state.currentVenue ? 'Spin Again' : 'Spin'}
              disabled={!this.state.currentList}
              accessibilityLabel='Have a spin and find out where to go'
            />
          </View>
          <View className='selectedList' style={fullWidthCentered}>
            {
              this.state.currentList ? (
                <View style={fullWidthCentered}>
                  <Text>Current List</Text>
                  <Text style={headers.h3}>{this.state.currentList}</Text>
                </View>
              ) : (
                <Text>Setup a list to get spinning</Text>
              )
            }
          </View>
        </View>
      </View>
    )
  }
}

export default Spinner
