import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SideLayout} from '../../layouts';
import {SideMenu} from '../../components/screens';

const Index = props => {
  return (
    <SideLayout>
      <SideMenu />
    </SideLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Index;
