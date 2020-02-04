import {View, Dimensions} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {
  IndicatorViewPager,
  PagerTitleIndicator,
} from 'react-native-best-viewpager';
const {width} = Dimensions.get('window');

const ViewPager = props => {
  let VP = useRef(0);

  const {
    onPageSelected = () => null,
    children,
    titles,
    padding = 0,
    style,
    containerStyle,
    itemStyle,
    initialPage = 0,
  } = props;

  useEffect(() => {
    updatePage(initialPage);
  }, [initialPage]);

  const updatePage = myPage => {
    VP.setPage(myPage);
  };

  const _renderTitleIndicator = () => {
    return (
      <PagerTitleIndicator
        style={style}
        titles={titles}
        itemStyle={[
          {
            minWidth: width / titles.length - padding,
          },
          itemStyle,
        ]}
        selectedItemStyle={[
          {
            minWidth: width / titles.length - padding,
          },
          itemStyle,
        ]}
      />
    );
  };
  return (
    <View style={[containerStyle]}>
      <IndicatorViewPager
        onPageSelected={res => onPageSelected(res.position)}
        ref={viewPager => {
          VP = viewPager;
        }}
        style={{
          flex: 1,
          flexDirection: 'column-reverse',
        }}
        indicator={_renderTitleIndicator()}>
        {children}
      </IndicatorViewPager>
    </View>
  );
};

export default ViewPager;
