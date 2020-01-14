import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { routeConfig } from '~/config/routeConfigInital';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import addUser from '~/pages/Dashboard/addUser';
import newOperation from '~/pages/Dashboard/newOperation';
import newPhase from '~/pages/Dashboard/newPhase';
import newTeam from '~/pages/Dashboard/newTeam';
import typeEquipament from '~/pages/Dashboard/typeEquipament';

import Profile from '~/pages/Profile';

import Home from '~/pages/Home';

export default (signedIn = false, isAdmin = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator({
          Home,
        }),
        Admin: createBottomTabNavigator(
          {
            Dashboard,
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255,0.7)',
              style: {
                backgroundColor: '#3F2474',
              },
            },
          }
        ),
        newUser: createStackNavigator(
          {
            addUser,
          },
          {
            defaultNavigationOptions: {
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: '#008099',
              },
              headerLeftContainerStyle: {
                marginLeft: 20,
              },
              headerTintColor: '#fff',
            },
          }
        ),
        NewOperation: createStackNavigator(
          {
            newOperation,
          },
          {
            defaultNavigationOptions: {
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: '#008099',
              },
              headerLeftContainerStyle: {
                marginLeft: 20,
              },
              headerTintColor: '#fff',
            },
          }
        ),
        NewPhase: createStackNavigator(
          {
            newPhase,
          },
          {
            defaultNavigationOptions: {
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: '#008099',
              },
              headerLeftContainerStyle: {
                marginLeft: 20,
              },
              headerTintColor: '#fff',
            },
          }
        ),
        NewTeam: createStackNavigator(
          {
            newTeam,
          },
          {
            defaultNavigationOptions: {
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: '#008099',
              },
              headerLeftContainerStyle: {
                marginLeft: 20,
              },
              headerTintColor: '#fff',
            },
          }
        ),
        TypeEquipment: createStackNavigator(
          {
            typeEquipament,
          },
          {
            defaultNavigationOptions: {
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: '#008099',
              },
              headerLeftContainerStyle: {
                marginLeft: 20,
              },
              headerTintColor: '#fff',
            },
          }
        ),
      },
      {
        initialRouteName: routeConfig(signedIn, isAdmin),
      }
    )
  );
