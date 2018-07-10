import React from 'react'
import {Text, View, Button, TouchableOpacity} from 'react-native'
import styles from '../styles'
import {connect} from 'react-redux'
import {currentHole, emptyHole} from '../actions'
import Playground from './Playground'
import Golfer from './Golfer'
import Test from './Test'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      score: []
    }
    this.increaseCount = this.increaseCount.bind(this)
    this.emptyCount = this.emptyCount.bind(this)
    this.nextHole = this.nextHole.bind(this)
  }
  increaseCount () {
    const action = currentHole()
    this.props.dispatch(action)
  }

  emptyCount () {
    const action = emptyHole()
    this.props.dispatch(action)
  }

  nextHole () {
    if (this.props.currentHole === 0) {
      return this.state.score
    } else {
      this.setState({
        score: [...this.state.score, this.props.currentHole]
      })
      this.emptyCount()
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Playground />
        <Test />
        <Golfer />
        <Button onPress={this.increaseCount} title='stroke'/>
        <Text style={styles.first}>Stroke: {this.props.currentHole}</Text>
        <TouchableOpacity onLongPress={this.nextHole} title='next Hole' style={styles.button}>
          <Text>Next Hole</Text>
        </TouchableOpacity>
        <Text style={styles.second}>score: {this.state.score.map(score => score).join(', ')}</Text>
      </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentHole: state.currentHole
  }
}

export default connect(mapStateToProps)(Main)
