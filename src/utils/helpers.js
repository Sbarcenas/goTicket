import {Navigation} from 'react-native-navigation';
import {pushScreen, TOAST} from '../navigation';
import {pushloginStackScreen} from '../navigation/layouts/stack';

export const Toaster = passProps => {
  Navigation.showOverlay({
    component: {
      name: TOAST,
      passProps,
      options: {
        overlay: {
          interceptTouchOutside: false,
        },
      },
    },
  });
};

export const pushSingleScreen = async (componentId, toPush, props) => {
  pushScreen(componentId, toPush, props);
};
