import React from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {IconText, RoundedButton, SearchInput} from '../../components/shared';
import {BURGER_ICON, FILTER_ICON, MORE_ICON} from '../../assets/media/icons';
import {colors} from '../../utils/theme';
import {FILTER_SCREEN, showModal} from '../../navigation';
const {height} = Dimensions.get('window');

const Index = props => {
  const {children, searchConfig = {}, componentId} = props;
  return (
    <ScrollView>
      <View style={{height: height * 0.21}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <RoundedButton image={BURGER_ICON} />
          </View>
          <View style={{flex: 4, marginRight: 20}}>
            <SearchInput
              tintColor={searchConfig.tintColor}
              stylePureInput={searchConfig.stylePureInput}
              styleContainer={[{height: 40}, searchConfig.styleContainer]}
              placeholder={searchConfig.placeholder}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 25,
            paddingHorizontal: 15,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <IconText
            text={'Guías'}
            textStyle={{
              color: colors.mainText,
            }}
            subTextStyle={{
              color: colors.mainText,
            }}
            icon={[{image: MORE_ICON, orientation: 'left'}]}
            iconStyle={{
              backgroundColor: 'transparent',
              marginRight: 10,
              marginVertical: 15,
            }}
          />
        </View>
      </View>
      <View>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Index;
