import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {AccountLayout, SearchBarLayout} from '../../layouts';
import {colors} from '../../utils/theme';
import {RecentCard, ViewPager} from '../../components/shared';
import {Babies, Children, Recents, TeenAgers} from '../index';
const {height} = Dimensions.get('window');

const Index = props => {
  return (
    <SearchBarLayout
      searchConfig={searchConfig}
      componentId={props.componentId}>
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
          <Children />
        </View>
        <View>
          <TeenAgers />
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
