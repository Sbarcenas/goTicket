import {ARTICLES_SCREEN, HOME_SCREEN, SIDE_SCREEN} from '../screens';
import {colors} from '../../utils/theme';
import {Navigation} from 'react-native-navigation';
import {} from '../../assets/';
import {ARTICLES_ICON} from '../../assets/';
import {GUIDES_ICON} from '../../assets/';
import {GROWTH_ICON} from '../../assets/';

export function pushTabBasedApp() {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: SIDE_SCREEN.name,
            id: 'leftSideDrawer',
            passProps: {},
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
                        name: ARTICLES_SCREEN.name,
                        id: 'mainComponent',
                        options: {},
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      animate: false,
                      backgroundColor: 'transparent',
                      text: 'Artículos',
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
                      animate: false,
                      backgroundColor: 'transparent',
                      text: 'Guías',
                      icon: GUIDES_ICON,
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
                      animate: false,
                      backgroundColor: 'transparent',
                      text: 'Crecimiento',
                      icon: GROWTH_ICON,
                      testID: 'ADD_PRODUCT_BAR_BUTTON',
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
