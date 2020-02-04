import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {AccountLayout} from '../../layouts';
import {ViewPager} from '../../components/shared';
import {colors} from '../../utils/theme';
import Children from './tabs/Children';
import Favorites from './tabs/Favorites';
const {width, height} = Dimensions.get('window');

const Index = props => {
  const {componentId} = props;
  return (
    <AccountLayout componentId={componentId}>
      <ViewPager
        titles={['Mis hijos', 'Mis favoritos']}
        style={{backgroundColor: 'transparent'}}
        containerStyle={{height: height * 0.65}}>
        <View>
          <Children />
        </View>
        <View>
          <Favorites />
        </View>
      </ViewPager>
    </AccountLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Index;
