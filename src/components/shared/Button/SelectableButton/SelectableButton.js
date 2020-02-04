import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {colors} from '../../../../utils/theme';

function SelectableButton(props) {
  const {
    id,
    title,
    containerStyle,
    selected,
    onSelect,
    background = colors.white,
    color = colors.blue,
    onSelectBackground = colors.blue,
    onSelectColor = colors.white,
  } = props;
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.container,
        containerStyle,
        {backgroundColor: selected ? onSelectBackground : background},
      ]}>
      <Text style={[styles.title, {color: selected ? onSelectColor : color}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: colors.goldBase,
    borderWidth: 1,
    borderRadius: 100,
  },
  title: {
    color: colors.blue,
  },
});

export default SelectableButton;
