/*Example of RealM Database in React Native*/
import React from 'react';

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

//Import external files
import HomeScreen from './src/screens/HomeScreen';
import RegisterUser from './src/screens/RegisterUser';
import UpdateUser from './src/screens/UpdateUser';

import ViewAllUser from './src/screens/ViewAllUser';
import DeleteUser from './src/screens/DeleteUser';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home Screen',
      headerStyle: { backgroundColor: '#328DFF' },
      headerTintColor: '#ffffff',
    },
  },
  
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: { backgroundColor: '#328DFF' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Update User',
      headerStyle: { backgroundColor: '#328DFF' },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#328DFF' },
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: { backgroundColor: '#328DFF' },
      headerTintColor: '#ffffff',
    },
  },
});
export default createAppContainer(App);