import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import {colors} from '../../utils/theme';
import {BACKGROUND, LOGIN_BACK} from '../../assets/media/backgrounds';
import {
  MainButton,
  RoundedImage,
  SpaceBetweenTop,
} from '../../components/shared';
import {BELL_ICON, LEFT_ARROW} from '../../assets/media/icons';
import {USER_IMAGE} from '../../assets/media/images';
import LinkText from '../../components/shared/Text/Linktext';
import {
  DismissModal,
  DismissOverlay,
  EDIT_PROFILE_SCREEN,
  popComponent,
  pushScreen,
  showModal,
} from '../../navigation';
const {width, height} = Dimensions.get('window');
const Index = props => {
  const {children, componentId} = props;
  return (
    <ImageBackground
      source={BACKGROUND}
      style={styles.container}
      imageStyle={{
        resizeMode: 'stretch',
      }}>
      <View style={{height: height * 0.05}}>
        <SpaceBetweenTop
          leftIcon={LEFT_ARROW}
          leftAction={() => DismissModal(componentId)}
          rightIcon={BELL_ICON}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          height: height * 0.25,
          flexDirection: 'row',
          marginTop: 10,
          marginLeft: 20,
          marginBottom: 20,
        }}>
        <RoundedImage image={USER_IMAGE} />
        <View style={{marginLeft: 20}}>
          <Text
            style={{fontWeight: 'bold', color: colors.mainText, fontSize: 17}}>
            Daniela Cruz
          </Text>
          <MainButton
            title="Editar perfil"
            style={{
              marginLeft: 0,
              marginTop: 10,
              backgroundColor: colors.mainPurple,
              borderRadius: 100,
              width: 121,
              height: 32,
            }}
            textStyle={{fontWeight: 'bold'}}
            onPress={() =>
              showModal(EDIT_PROFILE_SCREEN.name, {})
            }
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: colors.grayBackground,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        }}>
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%', backgroundColor: colors.white},
});

export default Index;
