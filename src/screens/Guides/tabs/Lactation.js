import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import {GUIDE_BACK} from '../../../assets/media/backgrounds';
import {colors} from '../../../utils/theme';
import {FeedingCard, LactancyCard} from '../../../components/shared';
import {GUIDE_SCREEN, showModal} from '../../../navigation';
const {width} = Dimensions.get('window');
const Lactation = props => {
  return (
    <FlatList
      contentContainerStyle={{alignItems: 'center'}}
      style={{paddingBottom: 50}}
      scrollEnabled={false}
      data={[1, 2, 3, 4, 5, 6, 7, 8]}
      keyExtractor={(item, index) => 'Comment' + index}
      renderItem={({item}) => (
        <LactancyCard
          onPress={() => showModal(GUIDE_SCREEN.name, {})}
          style={{marginBottom: 20}}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default Lactation;
