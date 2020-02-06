import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {LoginLayout} from '../../layouts';
import {LoginForm} from '../../components/screens';
import LinkText from '../../components/shared/Text/Linktext';
import {colors} from '../../utils/theme';
import {popComponent, pushScreen, REGISTER_SCREEN} from '../../navigation';

const Index = props => {
  const {componentId} = props;
  return (
    <LoginLayout>
      <View style={{flex: 2, width: '100%'}} />
      <View style={{backgroundColor: 'transparent', flex: 4, width: '100%'}}>
        <LoginForm />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <View style={{marginBottom: 10, flexDirection: 'row'}}>
          <Text>¿No tienes cuenta?</Text>
          <LinkText
            text="Registrate"
            textStyle={{
              color: colors.mainPurple,
              textDecorationLine: 'none',
              fontWeight: 'bold',
              fontSize: 14,
            }}
            style={{marginLeft: 5}}
            onPress={() =>
              pushScreen(componentId, REGISTER_SCREEN.name, {
                backFunction: popComponent,
              })
            }
          />
        </View>
      </View>
    </LoginLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Index;
