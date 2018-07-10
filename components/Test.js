import React from 'react'
import {Text, View} from 'react-native'
import {lastRoundScore} from '../db'

class Test extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      realm1: {
        id: 0,
        score: 0,
        par: 0,
        course: ''
      }
    }
  }

  componentDidMount () {
    lastRoundScore()
      .then(lastRound => {
        this.setState({
          realm1: lastRound[0]
        })
      })
  }

  render () {
    return (
      <View>
        <Text>
          score: {this.state.realm1.score}
        </Text>
      </View>
    )
  }
}

export default Test
