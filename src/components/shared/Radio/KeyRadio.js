import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../../utils/theme';
import {HEART_WHITE_ICON} from '../../../assets/media/icons';

const KeyRadio = props => {
  const {
    id,
    title = 'new',
    containerStyle,
    selected,
    onSelect,
    background = colors.white,
    onSelectBackground = colors.blue,
  } = props;

  return (
    <TouchableOpacity onPress={onSelect} style={containerStyle}>
      <View style={styles.buttonContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{marginLeft: 3, color: colors.mainText}}>{title}</Text>

          <View style={styles.circle}>
            <View
              style={[
                styles.checkedCircle,
                {
                  backgroundColor: selected
                    ? colors.mainPurple
                    : colors.mainText,
                },
              ]}>
              <Image source={HEART_WHITE_ICON} />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 20,
    borderRadius: 10,
  },
});

export default KeyRadio;
