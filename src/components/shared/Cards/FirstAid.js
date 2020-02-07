import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {RoundedImage} from '../index';
import {FIRST_AID_ICON} from '../../../assets/media/icons';
import {colors} from '../../../utils/theme';
const {width} = Dimensions.get('window');

const FirstAid = props => {
  const {title, source, style} = props;
  return (
    <TouchableOpacity
      style={[
        {
          width: width * 0.9,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        },
        style,
      ]}>
      <RoundedImage
        image={source || FIRST_AID_ICON}
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 63,
          height: 63,
          backgroundColor: colors.mainBlueOpacity,
          borderRadius: 100,
        }}
        imageStyle={{
          alignSelf: 'center',
          width: 39,
          height: 39,
        }}
      />
      <Text style={{width: 188, marginLeft: 10}}>
        {title || 'Atragantamiento / Asfixia / Obstrucción de la vía aérea'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default FirstAid;
