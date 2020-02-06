import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RoundedButton} from '../index';
import {SHARE_ICON, BACK_WHITE_ICON, HEART_GREEN_ICON} from '../../../assets';

const TopTransparent = props => {
  const {
    onPressBackButton,
    backIcon = BACK_WHITE_ICON,
    tintColor,
    iconStyle,
    imageStyle,
    style,
  } = props;
  return (
    <View style={[styles.header, style]}>
      <View>
        <RoundedButton
          tintColor={tintColor}
          imageStyle={[imageStyle]}
          onPress={onPressBackButton}
          containerStyle={[
            styles.roundedButton,
            iconStyle,
            {backgroundColor: 'transparent'},
          ]}
          image={backIcon}
        />
      </View>

      <View style={[styles.rightHeader]}>
        <RoundedButton
          imageStyle={[imageStyle]}
          tintColor={tintColor}
          image={HEART_GREEN_ICON}
          containerStyle={[styles.roundedButton, iconStyle]}
        />
        <RoundedButton
          imageStyle={[imageStyle]}
          tintColor={tintColor}
          image={SHARE_ICON}
          containerStyle={[styles.roundedButton, iconStyle]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: -73,
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 0,
    zIndex: 10,
  },
  roundedButton: {
    width: 42,
    height: 42,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  rightHeader: {
    alignItems: 'center',
    width: 90,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default TopTransparent;
