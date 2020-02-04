import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {AccountLayout, SearchBarLayout} from '../../layouts';
import {colors} from '../../utils/theme';
import {RecentCard, ViewPager} from '../../components/shared';
import {Babies, Recents} from '../index';
const {height} = Dimensions.get('window');

const Index = props => {
  return (
    <SearchBarLayout searchConfig={searchConfig}>
      <ViewPager
        titles={['Recientes', 'Bebés', 'Niños', 'Adolescentes']}
        style={{backgroundColor: 'transparent'}}
        containerStyle={{height: height * 0.69}}>
        <View>
          <Recents />
        </View>
        <View>
          <Babies />
        </View>
        <View>
          <Text>1</Text>
        </View>
        <View>
          <Text>2</Text>
        </View>
      </ViewPager>
    </SearchBarLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
});

const searchConfig = {
  stylePureInput: {color: colors.greenBold, fontWeight: 'bold'},
  styleContainer: {backgroundColor: colors.greenBaseAlt},
  tintColor: colors.greenBold,
};

export default Index;
