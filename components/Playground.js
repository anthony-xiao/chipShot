import React from 'react'
import {TextInput, Text, View} from 'react-native'
import styles from '../styles'
import {test} from '../api/apiClient'

class Playground extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      id: ''
    }
    this.fetchId = this.fetchId.bind(this)
  }
  componentDidMount () {
    this.fetchId()
  }

  fetchId () {
    return test()
      .then(post => {
        this.setState({
          id: post.title
        })
      })
  }

  render () {
    return (
      <View>
        <Text style={styles.first}>Test!</Text>
        <Text style={styles.second}>{this.state.id}</Text>
        <TextInput placeholder="Type here to translate!" onChangeText={(text) => this.setState({text})} />
        <Text>{this.state.text.split(' ').map((word) => word && '🍕')}</Text>
      </View>
    )
  }
}

export default Playground
