import Spinner from './components/Spinner'
import ListsPage from './components/ListsPage/ListsPage'
import { TabNavigator } from 'react-navigation'

const App = TabNavigator({
  Spinner: {
    screen: Spinner
  },
  Lists: {
    screen: ListsPage
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    indicatorStyle: {
      borderBottomColor: '#fff',
      borderBottomWidth: 2
    },
    style: {
      backgroundColor: '#2185d0'
    }
  }
})

export default App
