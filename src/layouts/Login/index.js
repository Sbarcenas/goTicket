import React from 'react';
import {View, StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import {LOGIN_BACK} from '../../assets/media/backgrounds';
import {RoundedButton} from '../../components/shared';
import {LEFT_ARROW} from '../../assets/media/icons';

const Index = props => {
  const {children, canBack, backFunction} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={LOGIN_BACK}
        style={styles.wall}
        imageStyle={{
          resizeMode: 'stretch',
        }}>
        {canBack && (
          <View style={{paddingTop: 10, paddingLeft: 15}}>
            <RoundedButton onPress={backFunction} image={LEFT_ARROW} />
          </View>
        )}
        <View style={{flex: 10, paddingHorizontal: 20}}>{children}</View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  wall: {
    flex: 1,
    width: 'auto',
    height: '100%',
  },
});

export default Index;
