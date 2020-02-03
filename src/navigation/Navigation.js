import {Navigation} from 'react-native-navigation';
import React from 'react';
import registerScreens from './registerScreens';
import {pushTabBasedApp} from './layouts';
import {pushloginStackScreen} from './layouts/stack';
import {colors} from '../utils/theme';
import {login} from '../services/feathers';

//Register All Screens
registerScreens();

export async function startApp() {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
    },
    statusBar: {
      style: 'dark',
    },
    layout: {
      orientation: ['portrait'],
    },
    bottomTabs: {
      animate: false,
      backgroundColor: 'white',
      drawBehind: false,
      hideShadow: false,
    },
    bottomTab: {
      textColor: 'gray',
      selectedTextColor: 'black',
      iconColor: 'gray',
      selectedIconColor: colors.mainBlue,
    },
  });

  try {
    await login();
    pushTabBasedApp();
  } catch (e) {
    pushloginStackScreen();
  }
}
