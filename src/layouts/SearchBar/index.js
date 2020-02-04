import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {IconText, RoundedButton, SearchInput} from '../../components/shared';
import {
  BURGER_ICON,
  FILTER_ICON,
  FIND_ICON,
  MORE_ICON,
} from '../../assets/media/icons';
import {colors} from '../../utils/theme';
const {height} = Dimensions.get('window');

const Index = props => {
  const {children, searchConfig = {}} = props;
  return (
    <View>
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
            marginTop: 10,
            paddingHorizontal: 15,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <IconText
            text={'Artículos'}
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
          <View style={{alignSelf: 'flex-end'}}>
            <RoundedButton image={FILTER_ICON} />
          </View>
        </View>
      </View>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Index;
