import { StackNavigator } from 'react-navigation'
import DelicyHomeScreen from '../Containers/DelicyHomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  DelicyHomeScreen: { screen: DelicyHomeScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'DelicyHomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
