import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../../utils/theme';

/**
 *
 * Generic icon, with round background, style, container property property is define, width and height is require or padding depends de dimensions of your image.
 * @param props  in props is require, send onPress function, and styleSheet.
 * @returns {*} a Rounded icon with background
 *
 */
const RoundedButton = props => {
  const {onPress, containerStyle, image, imageStyle, tintColor} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.baseContainer, containerStyle]}>
      <Image
        style={[imageStyle, {tintColor: tintColor}]}
        source={image}
        tintColor={tintColor}
      />
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = StyleSheet.create({
  baseContainer: {
    width: 42,
    height: 42,
    borderRadius: 100,
    backgroundColor: colors.tinyOrange,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
