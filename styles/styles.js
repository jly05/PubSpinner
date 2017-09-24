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
