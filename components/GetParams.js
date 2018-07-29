import React from 'react'
import {Text, View} from 'react-native'
import styles from '../styles'

class Main extends React.Component {
  render () {
    const {navigation} = this.props
    const paramItem = navigation.getParam('paramItem', 'No item found')
    const digit = navigation.getParam('number', 0)
    const currentHole = navigation.getParam('currentHole', 0)
    return (
      <View style={styles.container}>
        <Text>{paramItem}, {digit}, {currentHole} </Text>
      </View>
    )
  }
}

export default Main
