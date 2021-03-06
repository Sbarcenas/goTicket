import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {IconButton, Input} from '../../shared';
import {LOCK_ICON, MAIL_ICON, RIGHT_ARROW} from '../../../assets/media/icons';
import {Formik} from 'formik';
import {colors, fonts} from '../../../utils/theme';
import LinkText from '../../shared/Text/Linktext';
import {pushTabBasedApp} from '../../../navigation';
import {connect} from 'react-redux';
import {LOGIN} from '../../../redux/actions/authActions';

const LoginForm = props => {
  const {login, componentId} = props;

  const onLoginButton = ({email, password}) => {
    login({email, password}).then(() => pushTabBasedApp());
  };

  return (
    <View>
      <Text style={fonts.mainTittle}>Login</Text>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          onLoginButton(values);
        }}>
        {({handleChange, values, handleSubmit}) => (
          <View styles={styles.container}>
            <Input
              styleContainer={{marginTop: 10}}
              image={MAIL_ICON}
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder="E-mail"
              secureTextEntry={false}
            />
            <Input
              styleContainer={{marginTop: 20}}
              image={LOCK_ICON}
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder="Contraseña"
              secureTextEntry={true}
            />
            <LinkText
              text="¿Olvidaste tu contraseña?"
              textStyle={{
                color: colors.mainPurple,
                textDecorationLine: 'none',
                fontSize: 13,
              }}
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: 20,
              }}
              onPress={() => alert('Recovery pass')}
            />
            <IconButton
              onPress={handleSubmit}
              icon={RIGHT_ARROW}
              title={'Continuar'}
              style={{
                marginTop: 50,
                width: 150,
                backgroundColor: colors.mainPurple,
                paddingHorizontal: 10,
                borderWidth: 0,
                elevation: 2,
                alignSelf: 'flex-end',
              }}
              textStyle={{
                color: colors.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

const mapStateToProps = state => ({});

function mapDispatchToProps(dispatch) {
  return {
    login: user => dispatch(LOGIN(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
