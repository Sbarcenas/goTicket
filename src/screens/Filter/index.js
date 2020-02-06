import React from 'react';
import {StyleSheet} from 'react-native';
import {ModalBackArrow} from '../../layouts';
import KeyRadio from '../../components/shared/Radio/KeyRadio';
import CheckButtonGroup from '../../components/shared/Radio/CheckButtonGroup';
import {HSectionTitle} from '../../components/shared';
import {colors} from '../../utils/theme';
const checkData = [
  {id: 1, title: 'new'},
  {id: 2, title: 'now'},
  {id: 3, title: 'after'},
];
const Index = props => {
  const [themes, setThemes] = React.useState(new Map());
  const [babies, setBabies] = React.useState(new Map());
  const [children, setChildren] = React.useState(new Map());
  const [teenAgers, setTeenAgers] = React.useState(new Map());

  return (
    <ModalBackArrow componentId={props.componentId} title="Filtros">
      <HSectionTitle
        title="Temas"
        containerStyle={{marginHorizontal: 20}}
        textStyle={{color: colors.goldBold}}
      />
      <CheckButtonGroup
        Radio={<KeyRadio />}
        data={checkData}
        containerStyle={{marginRight: 10}}
        selected={themes}
        setSelected={setThemes}
      />
      <HSectionTitle
        title="Bebés"
        containerStyle={{marginHorizontal: 20}}
        textStyle={{color: colors.goldBold}}
      />
      <CheckButtonGroup
        Radio={<KeyRadio />}
        data={checkData}
        containerStyle={{marginRight: 10}}
        selected={babies}
        setSelected={setBabies}
      />
      <HSectionTitle
        title="Niños"
        containerStyle={{marginHorizontal: 20}}
        textStyle={{color: colors.goldBold}}
      />
      <CheckButtonGroup
        Radio={<KeyRadio />}
        data={checkData}
        containerStyle={{marginRight: 10}}
        selected={children}
        setSelected={setChildren}
      />
      <HSectionTitle
        title="Adolescentes"
        containerStyle={{marginHorizontal: 20}}
        textStyle={{color: colors.goldBold}}
      />
      <CheckButtonGroup
        Radio={<KeyRadio />}
        data={checkData}
        containerStyle={{marginRight: 10}}
        selected={teenAgers}
        setSelected={setTeenAgers}
      />
    </ModalBackArrow>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Index;
