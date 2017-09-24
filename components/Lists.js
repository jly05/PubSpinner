import React from 'react'
import { View, Text, StatusBar, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { containers, headers, custom } from '../styles/styles'
import Icon from 'react-native-vector-icons/FontAwesome'

class Lists extends React.Component {
  constructor () {
    super()

    this.setCurrentList = this.setCurrentList.bind(this)

    this.state = {
      currentList: null,
      lists: []
    }
  }

  setCurrentList () {

  }

  render () {
    let {height, width} = Dimensions.get('window')
    var marginStyle = {
      flex: 1,
      marginTop: StatusBar.currentHeight + (height * 0.02),
      marginBottom: (height * 0.05)
    }
    return (
      <View style={marginStyle}>
        <View style={containers.outer}>
          <View className='header'>
            <Text style={headers.h1}>Pub Spinner</Text>
          </View>
          <ScrollView className='lists'>
            {this.state.lists.map((list, index) => (
              <Text className='indent' key={index}>list.name</Text>
              ))
            }
          </ScrollView>
          <TouchableOpacity>
            <View className='addButton' style={custom.addButton}>
              <Icon name='plus' size={15} color='#fff' />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Lists
