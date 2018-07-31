import React from 'react'
import styles from '../styles'
// import golfer from '../golfer.png'
import {Image} from 'react-native'

const Logo = () => {
  return (
    <Image
      source={require('../golfer.png')}
      style={styles.Logo}
    />
  )
}

export default Logo
