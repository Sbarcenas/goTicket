import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {LoginLayout} from '../../layouts';
import {RegisterForm} from '../../components/screens';
import {popComponent} from '../../navigation';

const Index = props => {
  const {componentId} = props;
  const backFunction = componentId => popComponent(componentId);
  return (
    <LoginLayout canBack backFunction={() => backFunction(componentId)}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}>
        <View style={{height: 115}} />
        <View>
          <RegisterForm />
        </View>
      </ScrollView>
    </LoginLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Index;
