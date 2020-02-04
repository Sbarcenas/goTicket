import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import LinkText from '../Text/Linktext';
import {colors} from '../../../utils/theme';
import {IconText} from '../index';
import {CROWN_ICON, HEART_ICON, PIPE_ICON} from '../../../assets/media/icons';
import {ARTICLE_IMAGE} from '../../../assets/media/images';
const {width} = Dimensions.get('window');

const RecentCard = props => {
  const {title, subtitle, text, isPremium} = props;
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 10}}>
        {isPremium && (
          <IconText
            text={'Contenido premium'}
            textStyle={{
              color: colors.mainPurple,
              fontSize: 14,
            }}
            icon={[{image: CROWN_ICON, orientation: 'left'}]}
            iconStyle={{
              marginRight: 7,
              marginLeft: 5,
              alignSelf: 'center',
              backgroundColor: 'transparent',
            }}
            containerStyle={{marginTop: 10, alignItems: 'center'}}
          />
        )}
        <IconText
          text={'Salud y Bienestar'}
          textStyle={{
            color: colors.goldBold,
            fontSize: 14,
            fontWeight: 'bold',
          }}
          icon={[{image: PIPE_ICON, orientation: 'left'}]}
          iconStyle={{
            marginLeft: -5,

            alignSelf: 'center',
            backgroundColor: 'transparent',
          }}
          containerStyle={{marginTop: 10}}
        />
        <Text style={{fontSize: 20, color: colors.mainText}}>
          {subtitle || 'El chupo siempre controversial'}
        </Text>
      </View>
      <View style={{marginBottom: 10}}>
        <Text style={{color: colors.mainText, fontSize: 15}}>
          {text ||
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam nostrud exerci'.substring(
              0,
              196,
            )}
        </Text>
        <LinkText
          text="Continuar leyendo"
          textStyle={{color: colors.mainPurple}}
          style={{marginTop: -19, right: 20}}
        />
      </View>
      <View>
        <Image source={ARTICLE_IMAGE} style={{borderRadius: 20}} />
        <IconText
          text="6.4k"
          textStyle={{
            color: colors.mainBlue,
            fontSize: 14,
            fontWeight: 'bold',
          }}
          icon={[{image: HEART_ICON, orientation: 'left'}]}
          iconStyle={{
            marginRight: 10,
            alignSelf: 'center',
            backgroundColor: 'transparent',
          }}
          containerStyle={{marginTop: 10, alignSelf: 'center'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {maxWidth: width * 0.95},
});

export default RecentCard;
