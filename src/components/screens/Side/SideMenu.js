import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {MENU_ITEMS} from '../../../utils/constants/menuItems';
import {MenuItem} from '../index';

const SideMenu = ({dispatch}) => {
  return (
    <FlatList
      style={{marginTop: 30}}
      data={MENU_ITEMS}
      renderItem={({item}) => (
        <View style={{marginBottom: 12}}>
          <MenuItem
            onPress={() => item.onPress(item, dispatch)}
            text={item.name}
            image={item.icon}
          />
        </View>
      )}
      contentContainerStyle={{paddingTop: 24, paddingBottom: 12}}
      keyExtractor={(item, index) => 'item-' + index}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SideMenu;
