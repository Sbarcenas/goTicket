import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {RecentCard} from '../../../components/shared';
import {GUIDE_SCREEN, showModal} from '../../../navigation';

const Security = props => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FlatList
        style={{paddingBottom: 40}}
        scrollEnabled={false}
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

export default Security;
