import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ModalFullScreenLayout from '../../layouts/Modal/ModalFullScreen';
import {DismissModal} from '../../navigation';
import {ProfileForm} from '../../components/screens';

const EditProfile = props => {
  const onPressCloseButton = componentId => {
    DismissModal(componentId);
  };
  return (
    <ModalFullScreenLayout
      title="Perfil"
      onPressCloseButton={() => onPressCloseButton(props.componentId)}>
      <ProfileForm />
    </ModalFullScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default EditProfile;
