/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {colors} from '../../../utils/theme';

import {connect} from 'react-redux';
import {
  HSectionTitle,
  IconButton,
  MainButton,
  RadioButtonGroup,
  RadioHash,
} from '../../shared';
import {LOCK_ICON, MAIL_ICON} from '../../../assets/media/icons';
import GenericInput from '../../shared/Input/Input';

function MyDatForm(props) {
  const {onPress, user, setUser, logOut, componentId} = props;
  useEffect(() => {
    //getUser();
  }, []);
  const data = [
    {
      id: 1,
      label: 'Hombre',
      value: 'male',
    },
    {
      id: 2,
      label: 'Mujer',
      value: 'female',
    },
  ];

  const setData = data => {
    return setUser(user.id, data);
  };

  const [radio, setRadio] = useState();

  useEffect(() => {
    setRadio('');
  }, []);

  const checkRadio = value => {
    return setRadio(value);
  };
  return (
    <View style={styles.container}>
      <Formik
        handleSubmit
        initialValues={{
          name: '',
          l_name: '',
          phone: '',
          password: '',
          email: '',
        }}
        onSubmit={values => {
          let data = {
            first_name: values.name,
            last_name: values.l_name,
            phone: values.phone,
            gender: radio,
          };
          data =
            values.password != '' ? {...data, password: values.password} : data;

          setData(data)
            .then(() => popComponent(componentId))
            .catch(e => alert(JSON.stringify(e)));
        }}
        enableReinitialize>
        {({values, handleChange, handleSubmit}) => (
          <View styles={styles.container}>
            <HSectionTitle
              title="Nombre"
              containerStyle={{justifyContent: 'center'}}
            />

            <GenericInput
              image={MAIL_ICON}
              values={values.name}
              onChangeText={handleChange('name')}
              secureTextEntry={false}
              placeholder="Nombre"
            />
            <HSectionTitle
              title="Apellido"
              containerStyle={{justifyContent: 'center'}}
            />

            <GenericInput
              image={MAIL_ICON}
              values={values.l_name}
              onChangeText={handleChange('l_name')}
              secureTextEntry={false}
              placeholder="Apellido"
            />
            <HSectionTitle
              title="E-mail"
              containerStyle={{justifyContent: 'center'}}
            />

            <GenericInput
              editable={false}
              image={MAIL_ICON}
              values={values.email}
              onChangeText={handleChange('email')}
              placeholder="E-mail"
              secureTextEntry={false}
            />
            <HSectionTitle
              title="Celular"
              containerStyle={{justifyContent: 'center'}}
            />

            <GenericInput
              image={MAIL_ICON}
              values={values.phone}
              onChangeText={handleChange('phone')}
              placeholder="Celular"
              secureTextEntry={false}
            />
            <HSectionTitle
              title="Contraseña"
              containerStyle={{justifyContent: 'center'}}
            />

            <GenericInput
              image={LOCK_ICON}
              values={values.password}
              onChangeText={handleChange('password')}
              placeholder="Contraseña"
              secureTextEntry={true}
            />
            <HSectionTitle
              title="Selecciona tu género"
              containerStyle={{justifyContent: 'center'}}
            />
            <RadioButtonGroup
              radio={radio}
              checkRadio={checkRadio}
              style={{flexDirection: 'row', alignSelf: 'center'}}
              Radio={<RadioHash />}
              data={data}
              RenderItem={item => null}
            />
            <View style={{alignItems: 'center', marginTop: 20}}>
              <MainButton
                style={{
                  width: 216,
                  backgroundColor: colors.mainPurple,
                  borderRadius: 50,
                  marginBottom: 10,
                }}
                title="Guardar cambios"
                onPress={handleSubmit}
              />
              <IconButton
                style={{
                  width: 216,
                  backgroundColor: colors.newBlue,
                  borderRadius: 50,
                  marginBottom: 10,
                }}
                title="Cerrar sesión"
                onPress={() => logOut()}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  centerText: {
    color: colors.mainPurple,
    marginTop: 15,
    marginBottom: 15,
  },
});

const mapStateToProps = state => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDatForm);
