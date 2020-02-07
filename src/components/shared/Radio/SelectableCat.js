import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Radio from './Radio';
import {colors} from '../../../utils/theme';

const SelectableCat = props => {
  const {onSelecting, value, selected, style, label} = props;
  return (
    <TouchableOpacity
      onPress={() => onSelecting(value)}
      style={[
        {
          backgroundColor: colors.blueBold,
          height: 110,
          width: 100,
          borderRadius: 20,
        },
        style,
      ]}>
      <Radio
        onSelecting={onSelecting}
        value={value}
        selected={selected}
        style={{marginTop: 10, marginLeft: 10}}
      />
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text
          style={{
            color: colors.white,
            fontWeight: 'bold',
            fontSize: 15,
            marginBottom: 10,
            textAlign: 'center',
          }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SelectableCat;
