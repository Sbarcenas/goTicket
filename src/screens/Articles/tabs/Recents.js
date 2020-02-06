import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {DoubleTextImage, RecentCard} from '../../../components/shared';
import {GUIDE_SCREEN, showModal} from '../../../navigation';

const Recents = props => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FlatList
        style={{paddingBottom: 200}}
        scrollEnabled={true}
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={(item, index) => 'Comment' + index}
        renderItem={({item}) => (
          <RecentCard onPress={() => showModal(GUIDE_SCREEN.name, {})} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Recents;
