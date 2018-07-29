import {createStackNavigator} from 'react-navigation'
import Main from './Main'
import ListView from './ListView'
import GetParams from './GetParams'

const Nav = createStackNavigator(
  {
    Home: Main,
    ListView: ListView,
    GetParams: GetParams
  },
  {
    initialRouteName: 'Home'
  }
)

export default Nav
