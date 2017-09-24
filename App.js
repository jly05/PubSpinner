import Spinner from './components/Spinner'
import Lists from './components/Lists'
import { TabNavigator } from 'react-navigation'

var App = TabNavigator(
  {
    Spinner: {
      screen: Spinner
    },
    List: {
      screen: Lists
    }
  }, {
    tabBarPosition: 'bottom'
  }
)

export default App
