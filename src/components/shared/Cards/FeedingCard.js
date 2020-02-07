import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
  Dimensions,
} from 'react-native';
import {GUIDE_BACK, LOGIN_BACK} from '../../../assets/media/backgrounds';
import {colors} from '../../../utils/theme';
const {width} = Dimensions.get('window');

const FeedingCard = props => {
  const {source, text, style} = props;
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <ImageBackground
        source={GUIDE_BACK}
        style={[styles.wall]}
        imageStyle={{borderRadius: 18}}>
        <Text
          style={{
            color: colors.white,
            fontSize: 20,
            marginBottom: 15,
            marginLeft: 20,
            fontWeight: 'bold',
          }}>
          {text || 'Recién nacidos'}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.95,
    height: 180,
  },
  wall: {
    justifyContent: 'flex-end',
    flex: 1,

  },
});

export default FeedingCard;
