import {Toaster} from '../utils/helpers';
import {
  AccountScreen,
  Articles,
  EditProfile,
  Filter,
  Guide,
  Guides,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  SideScreen,
} from '../screens';

export const TOAST = {name: 'pandh.toast', screen: Toaster};
export const HOME_SCREEN = {name: 'pandh.homeScreen', screen: HomeScreen};
export const LOGIN_SCREEN = {name: 'pandh.loginScreen', screen: LoginScreen};
export const REGISTER_SCREEN = {
  name: 'pandh.registerScreen',
  screen: RegisterScreen,
};
export const SIDE_SCREEN = {name: 'pandh.sideScreen', screen: SideScreen};
export const ACCOUNT_SCREEN = {
  name: 'pandh.accountScreen',
  screen: AccountScreen,
};
export const EDIT_PROFILE_SCREEN = {
  name: 'pandh.editProfileScreen',
  screen: EditProfile,
};

export const ARTICLES_SCREEN = {
  name: 'pandh.articlesScreen',
  screen: Articles,
};

export const FILTER_SCREEN = {
  name: 'pandh.filterScreen',
  screen: Filter,
};

export const GUIDE_SCREEN = {
  name: 'pandh.guideScreen',
  screen: Guide,
};

export const GUIDES_SCREEN = {
  name: 'pandh.guidesScreen',
  screen: Guides,
};
