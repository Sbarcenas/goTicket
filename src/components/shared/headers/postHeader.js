import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../../../utils/theme';

const PostHeader = props => {
  const {title, author} = props;
  return (
    <View style={{marginBottom: 20}}>
      <View>
        <Text style={{fontSize: 22, color: colors.mainText, marginBottom: 15}}>
          {title || 'Guía de vacunas'}
        </Text>
        <Text style={{fontSize: 15, color: colors.mainText}}>
          {author || 'Dr. Julio Florez / Pediatra'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default PostHeader;
