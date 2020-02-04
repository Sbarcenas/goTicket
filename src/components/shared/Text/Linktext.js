import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

const LinkText = ({text, textStyle, style, onPress, source}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => onPress()}>
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
      {source && <Image source={source} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {textDecorationLine: 'underline', marginRight: 5},
});

export default LinkText;
