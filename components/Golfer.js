import React from 'react'
import {Text, View} from 'react-native'

class Golfer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      handicap: 0
    }
  }

  render () {
    return (
      <View>
        <Text>Name: {this.state.name}</Text>
        <Text>Handicap: {this.state.handicap}</Text>
      </View>

    )
  }
}

export default (Golfer)
