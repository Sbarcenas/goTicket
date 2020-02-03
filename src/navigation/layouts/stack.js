import {LOGIN_SCREEN} from '../screens';
import {colors} from '../../utils/theme';
import {Navigation} from 'react-native-navigation';

export const pushloginStackScreen = () => {
  console.log('Hello');
  Navigation.setRoot({
    root: {
      stack: {
        options: {
          topBar: {
            elevation: 0,
            background: {
              color: 'transparent',
            },
            buttonColor: colors.primary,
            drawBehind: true,
            visible: false,
          },
        },
        children: [
          {
            component: {
              name: LOGIN_SCREEN.name,
            },
          },
        ],
      },
    },
  });
};
