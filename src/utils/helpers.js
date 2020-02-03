import {Navigation} from "react-native-navigation";
import {TOAST} from "../navigation";

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
