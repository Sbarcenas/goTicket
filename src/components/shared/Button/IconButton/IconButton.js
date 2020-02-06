import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../../../utils/theme';


const IconButton = props => {
  const {
    title = 'Enter',
    style = {},
    textStyle = {},
    onPress = null,
    icon,
  } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <View style={styles.text}>
        <Text style={[textStyle]}>{title}</Text>
      </View>
      <View style={styles.icon}>
        <Image source={icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
  },

  text: {
    marginRight: 10,
    marginLeft: 20,
    fontSize: 16,
    color: colors.white,
  },
  icon: {},
});

export default IconButton;
