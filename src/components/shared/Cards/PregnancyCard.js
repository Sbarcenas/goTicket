import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
  Dimensions,
} from 'react-native';
import {GUIDE_BACK} from '../../../assets/media/backgrounds';
import {colors} from '../../../utils/theme';
import {IconText} from '../index';
import {HEART_ICON} from '../../../assets/media/icons';
const {width} = Dimensions.get('window');

const PregnancyCard = props => {
  const {style, source, title, likes, comments} = props;
  return (
    <View style={[{width: width * 0.9, marginBottom: 15}, style]}>
      <TouchableOpacity>
        <ImageBackground
          source={source || GUIDE_BACK}
          style={styles.wall}
          imageStyle={{
            borderRadius: 20,
          }}>
          <View
            style={{
              borderRadius: 20,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,.35)',
            }}>
            <Text
              style={{
                marginTop: 100,
                color: colors.white,
                height: 262,
                fontSize: 34,
                textAlign: 'center',
              }}>
              {title || 'Embarazada en navidad ¿Qué comer sin riesgos?'}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <IconText
          text={likes || '3.2k'}
          textStyle={{
            color: colors.mainText,
          }}
          containerStyle={{marginRight: 10}}
          subTextStyle={{
            color: colors.mainText,
          }}
          icon={[{image: HEART_ICON, orientation: 'left'}]}
          iconStyle={{
            backgroundColor: 'transparent',
            marginRight: 10,
            marginVertical: 15,
          }}
        />
        <IconText
          containerStyle={{marginLeft: 10}}
          text={comments || '1.1k'}
          textStyle={{
            color: colors.mainText,
          }}
          subTextStyle={{
            color: colors.mainText,
          }}
          icon={[{image: HEART_ICON, orientation: 'left'}]}
          iconStyle={{
            backgroundColor: 'transparent',
            marginRight: 10,
            marginVertical: 15,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  wall: {
    marginBottom: 10,
    height: 197,
  },
});

export default PregnancyCard;
