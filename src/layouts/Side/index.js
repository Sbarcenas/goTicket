import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RoundedButton, RoundedImage} from '../../components/shared';
import {colors} from '../../utils/theme';
import {USER_IMAGE} from '../../assets/media/images';
import LinkText from '../../components/shared/Text/Linktext';

const Index = props => {
  const {children} = props;
  return (
    <View
      style={{width: 'auto', height: '100%', backgroundColor: colors.white}}>
      <View style={{flexDirection: 'row', marginTop: 40, marginLeft: 20}}>
        <RoundedImage
          image={USER_IMAGE}
        />
        <View style={{justifyContent: 'center', marginLeft: 20}}>
          <Text
            style={{fontWeight: 'bold', color: colors.mainText, fontSize: 17}}>
            Daniela Cruz
          </Text>
          <LinkText
            text="Ver mi perfil"
            textStyle={{
              color: colors.mainPurple,
              textDecorationLine: 'none',
              fontSize: 12,
              fontFamily: 'poppins',
              fontWeight: 'bold',
            }}
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
            onPress={() => alert('Recovery pass')}
          />
        </View>
      </View>

      <View style={{paddingRight: 15, paddingLeft: 20}}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Index;
