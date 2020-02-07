import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/theme';

const Radio = props => {
  const {onSelecting, value, selected, style} = props;
  return (
    <TouchableOpacity
      style={[styles.circle, style]}
      onPress={() => onSelecting(value)}>
      {selected === value && <View style={styles.checkedCircle} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: 12,
    height: 12,
    borderRadius: 7,
    backgroundColor: colors.white,
  },
});

export default Radio;
