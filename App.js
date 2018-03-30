import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './views/Home';
import Create from './views/Create';
import Take from './views/Take';
import Question from './views/Question';
import CreateQuestion from './views/CreateQuestion';

const routes = {
  Home: {
    screen: StackNavigator({
      Home: { screen: Home }
    })
  },
  Create: {
    screen: StackNavigator({
      Create: { screen: Create },
      CreateQuestion: { screen: CreateQuestion }
    })
  },
  Take: {
    screen: StackNavigator({
      Take: { screen: Take },
      Question: { screen: Question }
    })
  }
}

const options = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch (routeName) {
        case "Home":
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          break;
        // case "Create":
        // break;
        default:
          iconName = ``
          iconName = `ios-options${focused ? '' : '-outline'}`;
      }
      return <Ionicons name={iconName} size={25} color={tintColor} />
    }
  }),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray'
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: true
}

const initialRoute = {
  initialRouteName: 'Home'
}

// const App = StackNavigator(routes, initialRoute);
const App = TabNavigator(routes, options);

export default App
