import {createStackNavigator} from 'react-navigation'
import Main from './Main'
import ListView from './ListView'
import GetParams from './GetParams'
import styles from '../styles'

const Nav = createStackNavigator(
  {
    Home: Main,
    ListView: ListView,
    GetParams: GetParams
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: styles.headerstyle,
      headerTintColor: '#ffffff'
    }
  }
)

export default Nav
