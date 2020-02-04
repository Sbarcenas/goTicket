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
      selectedTextColor: colors.mainBlue,
      iconColor: 'gray',
      selectedIconColor: colors.mainBlue,
    },
  });

  try {
    await login();
    pushTabBasedApp();
  } catch (e) {
    pushloginStackScreen();
    //pushTabBasedApp();
  }
}

export const openMenu = () => {
  Navigation.mergeOptions('leftSideDrawer', {
    sideMenu: {
      left: {
        visible: true,
      },
    },
  });
};

export const pushScreen = (componentId, toPush, props = {}) => {
  Navigation.push(componentId, {
    component: {
      name: toPush,
      passProps: props,
    },
  });
  closeMenu();
};

export const goingToHome = () => {
  Navigation.mergeOptions('expressComponent', {
    bottomTabs: {
      currentTabIndex: 0,
    },
  });
  closeMenu();
};

export const changeTab = index => {
  index
    ? Navigation.mergeOptions('mainComponent', {
        bottomTabs: {
          currentTabIndex: index,
        },
      })
    : null;
  closeMenu();
};

export const closeMenu = () => {
  Navigation.mergeOptions('leftSideDrawer', {
    sideMenu: {
      left: {
        visible: false,
      },
    },
  });
};

export const showModal = (toShow, props) => {
  Navigation.showModal({
    component: {
      name: toShow,
      passProps: props,
      options: {
        screenBackgroundColor: 'transparent',
        modalPresentationStyle: 'overCurrentContext',
        topBar: {
          visible: false,
          animate: true,
        },
      },
    },
  });
};

export const showOverlay = (toShow, props) => {
  Navigation.showOverlay({
    component: {
      name: toShow,
      passProps: props,
    },
  });
};

export const DismissOverlay = componentId => {
  Navigation.dismissOverlay(componentId);
};

export const DismissModal = componentId => {
  Navigation.dismissModal(componentId);
};

export const popComponent = componentId => {
  Navigation.pop(componentId);
};

export const popToRoot = componentId => Navigation.popToRoot(componentId);

export const dismissAllModals = () => Navigation.dismissAllModals();
