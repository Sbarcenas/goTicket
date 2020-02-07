import React, {useState} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {colors} from '../../../utils/theme';
import {HtmlRender} from '../../../components/shared';
import PostHeader from '../../../components/shared/headers/postHeader';

const NewlyBorn = props => {
  const {author, title} = props;
  return (
    <View style={{paddingHorizontal: 15, paddingBottom: 40}}>
      <PostHeader title={title} author={author} />
      <View>
        <HtmlRender />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default NewlyBorn;
