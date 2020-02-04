import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {colors} from '../../../../utils/theme';

const MainButton = props => {
  const {
    title = 'Enter',
    style = {},
    textStyle = {},
    onPress,
    disabled = false,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[disabled ? styles.disableButton : styles.button, style]}
      disabled={disabled}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
  },
  disableButton: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray,
  },
  text: {
    fontSize: 16,
    color: colors.white,
  },
});

export default MainButton;
