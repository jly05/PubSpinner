import { StyleSheet } from 'react-native'

exports.headers = StyleSheet.create({
  h1: {
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
