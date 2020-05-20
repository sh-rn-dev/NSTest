import { createAppContainer } from 'react-navigation'
import DetailScreen from '../Containers/DetailScreen'
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from '../Containers/MainScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  DetailScreen: { screen: DetailScreen },
  MainScreen: { screen: MainScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
