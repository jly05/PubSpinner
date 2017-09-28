import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableWithoutFeedback, Dimensions, ScrollView } from 'react-native'

class ListOfLists extends React.Component {
  constructor () {
    super()
    this.renderListItem = this.renderListItem.bind(this)
    this.state = {}
  }

  renderListItem (list, index) {
    const textStyle = {
      paddingTop: 10,
      paddingBottom: 10,
      color: 'black',
      flex: 1,
      fontSize: 14
    }
    const baseStyle = {
      flexDirection: 'row'
    }
    var style
    var checkMark

    if (index > 0) {
      style = [baseStyle, {
        borderTopColor: '#eeeeee',
        borderTopWidth: 1
      }]
    } else {
      style = baseStyle
    }
    if (list._id === this.props.currentList) {
      checkMark = <Text style={{
        flex: 0.1,
        color: '#007AFF',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
      }}>✓</Text>
    }
    return (
      <TouchableWithoutFeedback onPress={() => this.props.onSelect(list._id)} key={index}>
        <View style={style}>
          <Text style={textStyle}>{list.name}</Text>
          {checkMark}
        </View>
      </TouchableWithoutFeedback>
    )
  }

  render () {
    let width = Dimensions.get('window').width
    return (
      <ScrollView style={{flex: 1, width: 0.8 * width}}>
        { this.props.lists.map((list, index) => (
          this.renderListItem(list, index)
        ))}
      </ScrollView>
    )
  }
}

ListOfLists.propTypes = {
  lists: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  currentList: PropTypes.number
}

export default ListOfLists
