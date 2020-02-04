import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {MainButton, RoundedImage} from '../../index';
import {USER_IMAGE} from '../../../../assets/media/images';
import {colors} from '../../../../utils/theme';
import {BOY_ICON} from '../../../../assets/media/icons';

const TwoTextImage = props => {
  const {image, name, age} = props;
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 20,
      }}>
      <RoundedImage
        image={image || BOY_ICON}
        containerStyle={{width: 52, height: 52}}
      />
      <View style={{marginLeft: 20}}>
        <Text
          style={{fontWeight: 'bold', color: colors.mainText, fontSize: 17}}>
          {name || 'Santiago Cruz'}
        </Text>
        <Text
          style={{fontWeight: 'bold', color: colors.mainText, fontSize: 17}}>
          {age || '8 años'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TwoTextImage;
