import React from 'react'
import { View, Text, StatusBar, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { containers, headers, custom } from '../../styles/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import ListsPageItem from './ListsPageItem'
import ListsOfLists from './ListOfLists'

class Lists extends React.Component {
  constructor () {
    super()

    this.setCurrentList = this.setCurrentList.bind(this)

    this.state = {
      currentList: null,
      // lists: []
      lists: ['a', 'b', 'c']
    }
  }

  setCurrentList () {

  }

  addListItem () {

  }

  viewListDetails () {

  }

  render () {
    let {height, width} = Dimensions.get('window')
    var marginStyle = {
      flex: 1,
      marginTop: StatusBar.currentHeight + (height * 0.02),
      marginBottom: (height * 0.05)
    }
    var addButtonContainerStyle = {
      width: 0.8 * width,
      alignItems: 'flex-end'
    }
    return (
      <View style={marginStyle}>
        <View style={containers.outer}>
          <View className='header'>
            <Text style={headers.h1}>Pub Spinner</Text>
          </View>
          <ScrollView className='lists'>
            <ListsOfLists lists={this.state.lists} />
          </ScrollView>
          <View style={addButtonContainerStyle}>
            <TouchableOpacity>
              <View className='addButton' style={custom.addButton}>
                <Icon name='plus' size={15} color='#fff' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default Lists
