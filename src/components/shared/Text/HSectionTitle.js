import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../../../utils/theme';
import {IconText} from '../../index';
import {RIGHT_ARROW, SHARED_RIGHT_ARROW_ICON} from '../../../assets';

const HSectionTitle = props => {
  const {
    title,
    seeAll,
    linkText = 'Ver todas',
    icon = [{image: RIGHT_ARROW, orientation: 'right'}],
    onPress,
    iconContStyle,
    imageStyle,
    tintColor,
    containerStyle,
    textStyle,
    linkTextStyle,
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.sectionTitle, textStyle]}>{title}</Text>
      {seeAll && (
        <IconText
          textStyle={linkTextStyle}
          imageStyle={imageStyle}
          iconStyle={[iconContStyle]}
          text={linkText}
          icon={icon}
          onPress={onPress}
          tintColor={tintColor}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 17,
    color: colors.mainText,
    opacity: 0.7,
    fontWeight: 'bold',
  },
});

export default HSectionTitle;
