import React from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import {ADD_ICON} from '../../../assets/media/icons';
import {RoundedButton, RoundedImage} from '../../../components/shared';
import {DoubleTextImage} from '../../../components/shared';

const Children = props => {
  return (
    <View style={{flex: 1}}>
      <View style={{position: 'absolute', right: 20, bottom: 100}}>
        <RoundedButton
          image={ADD_ICON}
          containerStyle={{elevation: 10, zIndex: 999}}
        />
      </View>
      <FlatList
        scrollEnabled={true}
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={(item, index) => 'Comment' + index}
        renderItem={({item}) => <DoubleTextImage />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Children;
