import {
  LEFT_ACCOUNT_ICON,
  LEFT_ARTICLES_ICON,
  LEFT_GROWTH_ICON,
  LEFT_GUIDES_ICON,
  SIGN_OUT_ICON,
} from '../../assets/media/icons';
import {ACCOUNT_SCREEN, pushScreen, showModal} from '../../navigation';
import {LOGOUT} from '../../redux/actions/authActions';

export const MENU_ITEMS = [
  {
    key: 1,
    name: 'Mi cuenta',
    icon: LEFT_ACCOUNT_ICON,
    toIndexTab: 1,
    onPress: (item, dispatch) => {
      showModal(ACCOUNT_SCREEN.name, {});
    },
  },
  {
    key: 2,
    name: 'Artículos',
    icon: LEFT_ARTICLES_ICON,
    onPress: (item, dispatch) => {},
  },
  {
    key: 3,
    name: 'Guías',
    icon: LEFT_GUIDES_ICON,
    onPress: (item, dispatch) => {},
  },
  {
    key: 4,
    name: 'Crecimiento',
    icon: LEFT_GROWTH_ICON,
    toIndexTab: null,
    onPress: (item, dispatch) => {},
  },
  {
    key: 5,
    name: 'Cerrrar',
    icon: SIGN_OUT_ICON,
    toIndexTab: null,
    onPress: (item, dispatch) => dispatch(LOGOUT()),
  },
];
