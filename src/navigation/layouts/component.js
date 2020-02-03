import {Navigation} from 'react-native-navigation';
import theme from '../../utils/theme';
import {SIGNIN_SCREEN} from '../screens';

export function pushComponentLogIn() {
  Navigation.setRoot({
    root: {
      component: {
        name: SIGNIN_SCREEN,
        passProps: {
          text: 'This text will be available in your component.props',
        },
      },
    },
  });
}
