import React from 'react'
import { Text } from 'react-native'

class ListsPageItem extends React.Component {
  render () {
    return (
      <Text>{this.props.list.name}</Text>
    )
  }
}

export default ListsPageItem
