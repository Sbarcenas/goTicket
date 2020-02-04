import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RoundedButton} from '../index';
import {ACCOUNT_ICON} from '../../../assets/media/icons';

const SpaceBetween = props => {
  const {leftIcon, leftAction, rightIcon, rightAction, style} = props;
  return (
    <View style={[style, {marginBottom: 5}]}>
      <View style={styles.headerCont}>
        <RoundedButton
          image={leftIcon || ACCOUNT_ICON}
          onPress={leftAction}
          containerStyle={styles.roundedIcon}
        />
        <RoundedButton
          onPress={rightAction}
          image={rightIcon || ACCOUNT_ICON}
          containerStyle={styles.roundedIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerCont: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  roundedIcon: {
    width: 55,
    height: 55,
    backgroundColor: 'transparent',
  },
});

export default SpaceBetween;
