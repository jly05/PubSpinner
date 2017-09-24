import { StyleSheet } from 'react-native'

exports.headers = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    fontSize: 28
  },
  h3: {
    fontWeight: 'bold'
  }
})

exports.containers = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

exports.borders = StyleSheet.create({
  solidBlackOne: {
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1
  }
})

exports.custom = StyleSheet.create({
  addButton: {
    backgroundColor: '#f00',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
