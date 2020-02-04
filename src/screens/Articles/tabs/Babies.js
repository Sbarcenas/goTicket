import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {RecentCard, SelectableButton} from '../../../components/shared';
import {colors} from '../../../utils/theme';

const CATEGORIES = [
  {id: 1, title: '1 - 3 meses'},
  {id: 2, title: '4 - 6 meses'},
  {id: 3, title: '7 - 9 meses'},
  {id: 4, title: '10 - 12 meses'},
];
const Babies = props => {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
      }}>
      <FlatList
        style={{marginBottom: 10}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={CATEGORIES}
        keyExtractor={(item, index) => `list-item-${index}`}
        renderItem={({item}) => (
          <SelectableButton
            color={colors.white}
            onSelectColor={colors.white}
            background={colors.goldBase}
            onSelectBackground={colors.goldBold}
            id={item.id}
            containerStyle={{marginRight: 10}}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        extraData={selected}
      />

      <FlatList
        style={{paddingBottom: 200}}
        scrollEnabled={true}
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={(item, index) => 'Comment' + index}
        renderItem={({item}) => <RecentCard />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Babies;
