import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {GUIDE_BACK} from '../../../assets/media/backgrounds';
import {colors} from '../../../utils/theme';
const {width} = Dimensions.get('window');

const LactancyCard = props => {
  const {style} = props;
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <ImageBackground
        source={GUIDE_BACK}
        style={[styles.wall]}
        imageStyle={{borderRadius: 18}}>
        <Text
          style={{
            width: 150,
            color: colors.white,
            fontSize: 17,
            marginBottom: 15,
            marginLeft: 20,
            fontWeight: 'bold',
          }}>
          {'Importancia de la lactancia materna'}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.95,
  },
  wall: {
    paddingTop: 20,
    paddingLeft: 20,
    flex: 1,
    height: 115,
  },
});

export default LactancyCard;
