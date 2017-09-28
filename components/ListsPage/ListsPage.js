import React from 'react'
import { View, Text, StatusBar, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { containers, headers, custom } from '../../styles/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import ListsOfLists from './ListOfLists'

class Lists extends React.Component {
  constructor () {
    super()

    this.setCurrentList = this.setCurrentList.bind(this)

    this.state = {
      currentList: 1,
      // lists: []
      lists: [
        {_id: 0, name: 'Nottingham'},
        {_id: 1, name: 'Loughborough'},
        {_id: 2, name: 'Shoreditch'},
        {_id: 3, name: 'Soho'},
        {_id: 4, name: 'Nottingham'},
        {_id: 5, name: 'Loughborough'},
        {_id: 6, name: 'Shoreditch'},
        {_id: 7, name: 'Soho'},
        {_id: 8, name: 'Nottingham'},
        {_id: 9, name: 'Loughborough'},
        {_id: 10, name: 'Shoreditch'},
        {_id: 11, name: 'Soho'}
      ]
    }
  }

  setCurrentList (id) {
    this.setState({currentList: id})
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
          <View className='lists' style={{height: height * 0.6}}>
            <ListsOfLists
              lists={this.state.lists}
              onSelect={this.setCurrentList}
              currentList={this.state.currentList}
              />
          </View>
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
