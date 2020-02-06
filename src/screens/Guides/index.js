import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {GuidesLayout} from '../../layouts';
import {colors} from '../../utils/theme';
import {GuideIcon} from '../../components/screens';
import {SLEEP_ICON} from '../../assets/media/icons';
import {
  Feeding,
  FirstAid,
  GUIDES_COMPONENT_LIST,
  Lactation,
  NewlyBorn,
  Pregnancy,
  Sleeping,
  SphincterControl,
  VaccineControl,
} from './tabs';
import ComponentSelector from '../../components/ComponentSelector/ComponentSelector';

export const ITEM = [
  {
    id: 1,
    label: 'Alimentación',
    image: SLEEP_ICON,
    meta: {
      componentName: 'feeding',
    },
  },
  {
    id: 2,
    label: 'Sueño',
    image: SLEEP_ICON,
    meta: {
      componentName: 'sleeping',
    },
  },
  {
    id: 3,
    label: 'Control de Esfínteres',
    image: SLEEP_ICON,
    meta: {
      componentName: 'sphincterControl',
    },
  },
  {
    id: 4,
    label: 'Primeros Auxilios',
    image: SLEEP_ICON,
    meta: {
      componentName: 'firstAid',
    },
  },
  {
    id: 5,
    label: 'newlyBorn',
    image: SLEEP_ICON,
    meta: {
      componentName: 'newlyBorn',
    },
  },
  {
    id: 6,
    label: 'Guía de Vacunas',
    image: SLEEP_ICON,
    meta: {
      componentName: 'vaccineControl',
    },
  },
  {
    id: 7,
    label: 'Embarazo',
    image: SLEEP_ICON,
    meta: {
      componentName: 'pregnancy',
    },
  },
  {
    id: 8,
    label: 'Lactancia Materna',
    image: SLEEP_ICON,
    meta: {
      componentName: 'lactation',
    },
  },
  {
    id: 9,
    label: 'Seguridad',
    image: SLEEP_ICON,
    meta: {
      componentName: 'security',
    },
  },
];

const Index = props => {
  const [category, setCategory] = useState({
    id: 1,
    label: 'Alimentación',
    image: SLEEP_ICON,
    meta: {
      componentName: 'feeding',
    },
  });
  const checkCategory = value => {
    setCategory(value);
  };
  return (
    <GuidesLayout searchConfig={searchConfig}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={ITEM}
        renderItem={({item}) => (
          <GuideIcon
            source={item.image}
            onPress={() => checkCategory(item)}
            selected={category}
            style={{marginHorizontal: 10}}
            {...item}
          />
        )}
        keyExtractor={({item}, index) => 'NotHub' + index}
      />
      <ComponentSelector {...category} componentList={GUIDES_COMPONENT_LIST} />
    </GuidesLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
});

const searchConfig = {
  stylePureInput: {color: colors.blueBold, fontWeight: 'bold'},
  styleContainer: {backgroundColor: colors.blueBase},
  tintColor: colors.blueBold,
};
export default Index;
