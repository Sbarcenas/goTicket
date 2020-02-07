import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

const RadioButtonGroup = props => {
  const {
    data,
    RenderItem,
    BottomItem,
    Radio,
    radio,
    checkRadio,
    horizontal,
    valueKey,
  } = props;
  const _renderItems = () =>
    data.map((q, index) => {
      return (
        <View>
          {React.cloneElement(Radio, {
            RenderItem: () => RenderItem(q),
            BottomItem: () => (BottomItem ? BottomItem(q, index) : null),
            key: q.label,
            value: valueKey ? q[valueKey] : q.value,
            ...q,
            onSelecting: checkRadio,
            selected: radio,
          })}
        </View>
      );
    });

  return <View style={[styles.container, props.style]}>{_renderItems()}</View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default RadioButtonGroup;
