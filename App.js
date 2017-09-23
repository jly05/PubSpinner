import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Welcome to PubSpinner!</Text>
        <Text>A handy app to help you choose an establishment.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  h1: {
    fontWeight: 'bold'
  }
})
