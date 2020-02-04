import React, {Fragment} from 'react';
import {View, Image, StyleSheet, Dimensions, Text} from 'react-native';
import {colors} from '../../../../utils/theme';
const {width} = Dimensions.get('window');

function RoundedImage(props) {
  const {image, containerStyle, tintColor, Child, imageStyle} = props;
  return (
    <Fragment>
      {Child && <Child />}
      <View style={[styles.profileContainer, containerStyle]}>
        <Image
          source={image}
          style={[styles.profileImage, imageStyle]}
          tintColor={tintColor}
        />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: '110%',
    height: '110%',
    alignSelf: 'flex-end',
  },
  profileContainer: {
    borderWidth: 1,
    borderColor: colors.white,
    overflow: 'hidden',
    height: width * 0.344,
    width: width * 0.344,
    borderRadius: 100,
  },
});
export default RoundedImage;
