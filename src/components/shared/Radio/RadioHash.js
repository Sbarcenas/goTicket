import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/theme';

const RadioHash = props => {
  const {onSelecting, RenderItem, BottomItem, label} = props;

  return (
    <View>
      <View style={styles.buttonContainer}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => onSelecting(props.value)}>
            {props.selected === props.value && (
              <View style={styles.checkedCircle} />
            )}
          </TouchableOpacity>
          <Text style={{marginLeft: 3, color: colors.mainText}}>{label}</Text>
        </View>

        {RenderItem && <RenderItem />}
      </View>
      {BottomItem && <BottomItem />}
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.mainBlue,
  },
});

export default RadioHash;
