import {HOME_SCREEN} from '../screens';
import {colors} from '../../utils/theme';
import {Navigation} from 'react-native-navigation';
import {} from '../../assets/';
import {ARTICLES_ICON} from '../../assets/';

export function pushTabBasedApp() {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: HOME_SCREEN.name,
            id: 'leftSideDrawer',
            passProps: {
              text: 'This is a left side menu screen',
            },
          },
        },
        center: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: HOME_SCREEN.name,
                        id: 'mainComponent',
                        options: {},
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      animate: true,
                      backgroundColor: 'transparent',
                      text: 'Home',
                      icon: ARTICLES_ICON,
                      testID: 'HOME_SCREEN_BAR_BUTTON',
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        id: 'expressComponent',
                        name: HOME_SCREEN.name,
                        options: {},
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      animate: true,
                      backgroundColor: 'transparent',
                      text: 'Express',
                      icon: ARTICLES_ICON,
                      testID: 'MY_PRODUCTS_BAR_BUTTON',
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: HOME_SCREEN.name,
                        options: {},
                        passProps: {title: 'Bolsa de Compra'},
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      animate: true,
                      backgroundColor: 'transparent',
                      text: 'Bolsa',
                      badge: 'New',
                      badgeColor: colors.secondary,
                      icon: ARTICLES_ICON,
                      testID: 'ADD_PRODUCT_BAR_BUTTON',
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: HOME_SCREEN.name,
                        options: {},
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      animate: true,
                      background: 'transparent',
                      text: 'Wiki',
                      icon: ARTICLES_ICON,
                      testID: 'NOTIFICATIONS_BAR_BUTTON',
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: HOME_SCREEN.name,
                        options: {},
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      animate: true,
                      background: 'transparent',
                      text: 'Cuenta',
                      icon: ARTICLES_ICON,
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
  });
}
