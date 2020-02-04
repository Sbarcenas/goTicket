import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import {colors} from '../../../utils/theme';

function GenericInput(props) {
  const {
    image,
    stylePureInput = {},
    values,
    placeholder,
    styleContainer = {},
    onChangeText,
    styleImage = {},
    name,
    secureTextEntry = false,
    editable = true,
    tintColor = null,
    keyboardType = 'default',
  } = props;

  return (
    <View style={[styles.container, styleContainer]}>
      <View style={[styles.images, styleImage]}>
        <Image
          style={{tintColor: tintColor}}
          tintColor={tintColor}
          source={image}
        />
      </View>

      <TextInput
        name={name}
        style={[styles.textInput, stylePureInput]}
        value={values ? values : null}
        placeholder={placeholder}
        editable={editable}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
  },
  images: {
    flex: 1,
  },
  textInput: {
    height: 40,
    flex: 10,
  },
});

export default GenericInput;
