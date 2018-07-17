import React from 'react'
import styles from '../styles'
import {Text, View, FlatList, SectionList} from 'react-native'

class List extends React.Component {
  render () {
    return (
      <View>
        <SectionList
          sections={testData}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.item}>{section.title}</Text>}
          keyExtractor={(item, index) => index}/>
        {/* <FlatList data={testData} renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/> */}

      </View>
    )
  }
}

const testData = [
  {title: 1, data: ['a']},
  {title: 2, data: ['aa']},
  {title: 3, data: ['asd', 'daf']},
  {title: 4, data: ['aewe']},
  {title: 5, data: ['aff']},
  {title: 6, data: ['adasf']}
]

export default List
