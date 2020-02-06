import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import {colors} from '../../../utils/theme';
import {USER_IMAGE} from '../../../assets';
import {AirbnbRating} from 'react-native-ratings';
const {width} = Dimensions.get('window');

const Comment = props => {
  const {stars, content, author, containerStyle} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.headCard}>
        <Image
          source={USER_IMAGE}
          style={{width: 50, height: 50, borderRadius: 100, marginRight: 5}}
        />
        <View style={{justifyContent: 'center'}}>
          <Text>{author}</Text>
          <AirbnbRating
            showRating={false}
            count={5}
            isDisabled
            onFinishRating={x => console.log(x)}
            size={13}
          />
        </View>
      </View>

      <View
        style={{
          elevation: 1,
          backgroundColor: colors.white,
          borderRadius: 10,
          paddingVertical: 15,
          paddingHorizontal: 0,
          marginLeft: 20,
        }}>
        <Text style={styles.text}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
  },
  title: {
    marginBottom: 3,
    color: colors.titleGray,
    textAlign: 'left',
    fontSize: 15,
  },
  text: {
    marginHorizontal: 10,
    color: colors.titleGray,
    fontSize: 14,
  },
  author: {
    color: colors.titleGray,
    fontSize: 14,
    fontWeight: 'bold',
  },
  headCard: {
    flexDirection: 'row',
  },
});

export default Comment;
