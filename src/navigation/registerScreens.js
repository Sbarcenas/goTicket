import {store} from '../redux/store';
import {Provider} from 'react-redux';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import * as screens from './screens';

export default function() {
  const views = Object.values(screens);
  views.map(view => {
    Navigation.registerComponentWithRedux(
      view.name,
      () => view.screen,
      Provider,
      store,
    );
  });
}
