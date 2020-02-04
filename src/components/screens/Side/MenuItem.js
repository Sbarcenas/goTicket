import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/theme';

function MenuItem(props) {
  const {
    image,
    stylePureText,
    styleContainer,
    styleImage,
    text,
    styleTextContainer,
    onPress,
  } = props;

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={[styles.container, styleContainer]}>
        <View style={[styles.images, styleImage]}>
          <Image source={image} />
        </View>
        <View style={[styles.textContainer, styleTextContainer]}>
          <Text style={[styles.text, stylePureText]}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: colors.grayBackground,
    flexDirection: 'row',
    alignItems: 'center',
  },
  images: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    color: colors.mainText,
  },
  textContainer: {
    justifyContent: 'center',
    flex: 8,
  },
});
export default MenuItem;
