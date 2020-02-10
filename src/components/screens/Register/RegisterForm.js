import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {IconButton, Input} from '../../shared';
import {
  ACCOUNT_ICON,
  LOCK_ICON,
  MAIL_ICON,
  RIGHT_ARROW,
} from '../../../assets/media/icons';
import {Formik} from 'formik';
import {colors, fonts} from '../../../utils/theme';
import LinkText from '../../shared/Text/Linktext';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {REGISTER} from '../../../redux/actions/authActions';

const RegisterForm = props => {
  const {addNewUser} = props;
  const SCHEMA = Yup.object().shape({
    password: Yup.string()
      .required('Contraseña requerida')
      .min(6, 'Tu contraseña debe tener almenos 6 caracteres')
      .matches(/(?=.*[A-Z])/, 'Tu contraseña debe tener almenos 1 mayuscula'),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Las constraseñas deben coincidir',
    ),
    first_name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    last_name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });

  const addUser = values => {
    addNewUser(values).then(() => popView());
  };

  return (
    <View>
      <Text style={fonts.mainTittle}>Registro</Text>
      <Formik
        validationSchema={SCHEMA}
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          passwordConfirm: '',
        }}
        onSubmit={values => {
          addUser({...values});
        }}>
        {({handleChange, values, handleSubmit}) => (
          <View styles={styles.container}>
            <Input
              styleContainer={{marginTop: 20}}
              image={ACCOUNT_ICON}
              value={values.first_name}
              onChangeText={handleChange('first_name')}
              placeholder="nombre"
              secureTextEntry={false}
            />
            <Input
              styleContainer={{marginTop: 20}}
              image={ACCOUNT_ICON}
              value={values.last_name}
              onChangeText={handleChange('last_name')}
              placeholder="Apellido"
              secureTextEntry={false}
            />
            <Input
              styleContainer={{marginTop: 20}}
              image={MAIL_ICON}
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder="E-mail"
              secureTextEntry={false}
            />

            <Input
              styleContainer={{marginTop: 20}}
              image={LOCK_ICON}
              value={values.passwordConfirm}
              onChangeText={handleChange('passwordConfirm')}
              placeholder="Contraseña"
              secureTextEntry={true}
            />
            <Input
              styleContainer={{marginTop: 20}}
              image={LOCK_ICON}
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder="Confirmar contraseña"
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
              title={'Crear cuenta'}
              style={{
                marginTop: 50,
                width: 180,
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
    addNewUser: user => dispatch(REGISTER(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
