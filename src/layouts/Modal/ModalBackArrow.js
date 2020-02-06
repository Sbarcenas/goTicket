import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {IconText} from '../../components';
import {LEFT_ARROW} from '../../assets';
import {colors} from '../../utils/theme';
import {DismissModal} from '../../navigation';

const ModalBackArrow = props => {
  const {
    children,
    title,
    onPress,
    source,
    tintColor = colors.mainText,
    componentId,
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
          <IconText
            onPress={() => DismissModal(componentId)}
            text={title || 'title'}
            tintColor={colors.blueAlternative}
            textStyle={{
              color: colors.blueAlternative,
            }}
            subTextStyle={{
              color: colors.mainText,
            }}
            icon={[{image: source || LEFT_ARROW, orientation: 'left'}]}
            iconStyle={{
              backgroundColor: 'transparent',
              marginRight: 20,
              marginVertical: 15,
            }}
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

export default ModalBackArrow;
