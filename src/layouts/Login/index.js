import React from 'react';
import {View, StyleSheet} from 'react-native';

const Index = props => {
  const {children} = props;
  return (
    <View>
      <View>{children}</View>
    </View>
  );
};
 
 const styles = StyleSheet.create({
    container:{}
 })

export default Index;
