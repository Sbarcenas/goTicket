import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../../../utils/theme';
import {RoundedButton, SearchInput} from '../index';
import {FIND_ICON} from '../../../assets';
import {connect} from 'react-redux';

const Search = props => {
  const {
    stylePureInput = {},
    placeholder = 'Buscar',
    styleContainer = {},
    onChangeText,
    name,
    values,
    editable = true,
    tintColor,
  } = props;

  return (
    <View style={[styles.container, styleContainer]}>
      <TextInput
        name={name}
        style={[styles.textInput, stylePureInput]}
        value={values ? values : null}
        placeholder={placeholder}
        editable={editable}
        onChangeText={onChangeText}
      />

      <View>
        <RoundedButton
          containerStyle={styles.images}
          tintColor={tintColor}
          image={FIND_ICON}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 100,
    borderColor: colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 3,
  },
  images: {
    padding: 6,
    backgroundColor: colors.orange,
  },
  textInput: {
    height: 45,
    flex: 12,
  },
});

export default connect()(Search);
