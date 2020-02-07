import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {
  PregnancyCard,
  Radio,
  RadioButtonGroup,
  RadioHash,
  RecentCard,
} from '../../../components/shared';
import SelectableCat from '../../../components/shared/Radio/SelectableCat';

const data = [
  {
    id: 1,
    label: 'Rutinas de ejercicio',
    value: '1',
  },
  {
    id: 2,
    label: 'Cuiados y consejos',
    value: '2',
  },
  {
    id: 3,
    label: 'Menú para embarazadas',
    value: '3',
  },
];

const Pregnancy = props => {
  const [radio, setRadio] = useState('1');

  const checkRadio = value => {
    return setRadio(value);
  };
  return (
    <View>
      <RadioButtonGroup
        radio={radio}
        checkRadio={checkRadio}
        style={{flexDirection: 'row', alignSelf: 'center'}}
        Radio={<SelectableCat style={{marginRight: 10}} />}
        data={data}
        RenderItem={item => null}
      />
      <FlatList
        style={{paddingBottom: 40, marginTop: 30}}
        contentContainerStyle={{alignItems: 'center'}}
        scrollEnabled={true}
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={(item, index) => 'Comment' + index}
        renderItem={({item}) => <PregnancyCard />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Pregnancy;
