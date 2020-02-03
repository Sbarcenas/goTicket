/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import {startApp} from './src/navigation';

Navigation.events().registerAppLaunchedListener(() => startApp());
