import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {FeedingCard, RecentCard} from '../../../components/shared';
import {GUIDE_SCREEN, showModal} from '../../../navigation';

const Feeding = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        style={{paddingBottom: 50}}
        scrollEnabled={false}
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={(item, index) => 'Comment' + index}
        renderItem={({item}) => (
          <FeedingCard
            onPress={() => showModal(GUIDE_SCREEN.name, {})}
            style={{marginBottom: 20}}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  wall: {
    justifyContent: 'flex-end',
    flex: 1,
  },
});

export default Feeding;
