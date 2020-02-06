import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {ShareHeader} from '../../components/shared';
import {colors} from '../../utils/theme';
import {GUIDE_BACK} from '../../assets/media/backgrounds';
import {GuideLayout} from '../index';

const Index = props => {
  const {children} = props;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={{position: 'relative'}}>
            <ShareHeader style={{position: 'absolute'}} />
            <ImageBackground
              source={GUIDE_BACK}
              style={{width: '100%', height: 262, justifyContent: 'flex-end'}}
              imageStyle={{}}>
              <View
                style={{
                  borderTopLeftRadius: 100,
                  height: 35,
                  width: '100%',
                  backgroundColor: colors.white,
                }}
              />
            </ImageBackground>
          </View>
          <View style={{flex: 1}}>{children}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayBackground,
    flex: 1,
  },
});

export default Index;
