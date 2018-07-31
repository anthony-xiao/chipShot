import React from 'react'
import {Text, View, Button} from 'react-native'
import styles from '../styles'
import Logo from './Logo'

class Main extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: navigation.getParam('paramItem', 'no number'),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    }
  }

  render () {
    const {navigation} = this.props
    const paramItem = navigation.getParam('paramItem', 'No item found')
    const digit = navigation.getParam('number', 0)
    const currentHole = navigation.getParam('currentHole', 0)
    return (
      <View style={styles.container}>
        <Text>{paramItem}, {digit}, {currentHole} </Text>
        <Button title='change title' onPress={()=> this.props.navigation.setParams({paramItem: 'changed!'})} />
        <Logo />
      </View>
    )
  }
}

export default Main
