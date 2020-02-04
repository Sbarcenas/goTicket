import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import {RoundedButton} from '../index';
import {colors, fonts} from '../../../utils/theme';

const IconText = props => {
  const {
    text,
    icon,
    onPress,
    textStyle,
    iconStyle,
    containerStyle,
    imageStyle,
    tintColor,
    RenderItem,
    subText,
    subTextStyle,
  } = props;

  const _renderIcons = (icon, position) =>
    icon
      .filter(({orientation}) => orientation === position)
      .map((item, index) => (
        <RoundedButton
          tintColor={tintColor}
          imageStyle={imageStyle || {tintColor: tintColor}}
          key={index}
          containerStyle={[styles.roundedButton, iconStyle]}
          image={item.image}
        />
      ));
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          {icon && _renderIcons(icon, 'left')}
        </View>
        <View>
          <Text style={[styles.text, textStyle]}>{text}</Text>
          {subText && (
            <Text style={[styles.text, subTextStyle]}>{subText}</Text>
          )}
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          {icon && _renderIcons(icon, 'right')}
          {RenderItem && <RenderItem />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roundedButton: {
    width: 17,
    height: 17,
  },
  text: {
    color: colors.mainText,
    fontSize: 20,
    marginRight: 5,
  },
});
export default IconText;
