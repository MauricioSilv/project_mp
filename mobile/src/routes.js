import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { routeConfig } from '~/config/routeConfigInital';
import Dashboard from '~/pages/Dashboard';
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
        Admin: createBottomTabNavigator({
          Dashboard,
        }),
      },
      {
        initialRouteName: routeConfig(signedIn, isAdmin),
      }
    )
  );
