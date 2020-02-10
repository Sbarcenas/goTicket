import React, {useRef, useEffect} from 'react';
import {View, Dimensions, Platform, StyleSheet} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import {DismissOverlay} from '../../../navigation';
const {width} = Dimensions.get('window');

const Toast = props => {
  const {title = '', text = '', type, duration = 5000, componentId} = props;
  useEffect(() => {
    this.dropdown.alertWithType(type, title, text);
    setTimeout(() => {
      DismissOverlay(componentId);
    }, duration);
  }, []);

  return (
    <View style={{width}}>
      <DropdownAlert
        elevation={4}
        translucent={Platform.OS === 'ios'}
        ref={ref => (this.dropdown = ref)}
        closeInterval={duration}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Toast;
