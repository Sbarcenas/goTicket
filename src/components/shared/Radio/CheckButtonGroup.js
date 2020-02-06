import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

const CheckButtonGroup = props => {
  const {data, RenderItem, BottomItem, Radio, selected, setSelected} = props;
  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  const _renderItems = () =>
    data.map((q, index) => {
      return (
        <View>
          {React.cloneElement(Radio, {
            RenderItem: () => RenderItem(q),
            BottomItem: () => (BottomItem ? BottomItem(q, index) : null),
            key: q.id,
            ...q,
            onSelect: () => onSelect(q.id),
            selected: !!selected.get(q.id),
          })}
        </View>
      );
    });

  return <View style={[styles.container, props.style]}>{_renderItems()}</View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default CheckButtonGroup;
