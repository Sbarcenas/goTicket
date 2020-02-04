import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import {RoundedButton} from '../../components';
import {CANCEL_ICON} from '../../assets';
import {colors, fonts} from '../../utils/theme';

const ModalFullScreenLayout = props => {
  const {
    children,
    title,
    onPressCloseButton,
    source,
    tintColor = colors.mainText,
  } = props;
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={source}
            style={{tintColor: tintColor, marginRight: 10}}
            tintColor={tintColor}
          />
          <Text style={[{color: tintColor, fontWeight: 'bold', fontSize: 17}]}>
            {title}
          </Text>
        </View>

        <View style={[]}>
          <RoundedButton
            onPress={onPressCloseButton}
            image={CANCEL_ICON}
            tintColor={tintColor}
            containerStyle={[styles.roundedButton]}
          />
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            marginHorizontal: 10,
            flex: 1,
          }}>
          {children}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  header: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 0,
    zIndex: 10,
  },
  roundedButton: {
    width: 42,
    height: 42,
    backgroundColor: 'transparent',
  },
});

export default ModalFullScreenLayout;
