import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { routeConfig } from '~/config/routeConfigInital';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

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
                backgroundColor: '#124676',
              },
            },
          }
        ),
      },
      {
        initialRouteName: routeConfig(signedIn, isAdmin),
      }
    )
  );
