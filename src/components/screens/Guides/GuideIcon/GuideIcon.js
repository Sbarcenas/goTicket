import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {SLEEP_ICON} from '../../../../assets/media/icons';
import {colors} from '../../../../utils/theme';

const GuideIcon = props => {
  const {id, source, style, sourceStyle, selected = {}, onPress, label} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[style, {width: 67}]}>
      <View
        style={[
          selected.id === id ? styles.selectedContainer : styles.container,
        ]}>
        <Image source={source || SLEEP_ICON} />
      </View>
      <Text style={{textAlign: 'center'}}>Primeros Auxilios</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 67,
    minHeight: 67,
    backgroundColor: colors.mainBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  selectedContainer: {
    width: 67,
    minHeight: 67,
    backgroundColor: colors.mainPurple,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default GuideIcon;
