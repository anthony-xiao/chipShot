import Realm from 'realm'
import React from 'react'
import {Text, View} from 'react-native'

class Test extends React.Component {
  constructor (props) {
    super(props)
    this.state = {realm: null}
  }

  componentDidMount () {
    Realm.open({
      schema: [{name: 'Dog', properties: {name: 'string'}}]
    }).then(realm => {
      realm.write(() => {
        realm.create('Dog', {name: 'Rex'})
      })
      this.setState({realm})
    })
  }

  render () {
    const info = this.state.realm
      ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
      : 'Loading...'

    return (
      <View>
        <Text>
          {info}
        </Text>
      </View>
    )
  }
}

export default Test
