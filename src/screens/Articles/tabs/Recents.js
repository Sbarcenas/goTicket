import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {DoubleTextImage, RecentCard} from '../../../components/shared';
import {GUIDE_SCREEN, showModal} from '../../../navigation';
import WrapReduxSearch from '../../../components/shared/wrapReduxAlgolia';
import {_SET_QUERY} from '../../../redux/actions/searchActions';
import {connect} from 'react-redux';

const Recents = props => {
  const {setQuery, search} = props;
  useEffect(() => {}, [search]);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <WrapReduxSearch keys={[{key: 'recents', index: 'blogs'}]} />
      <FlatList
        contentContainerStyle={{paddingBottom: 30}}
        scrollEnabled={true}
        data={search.result['recents']}
        keyExtractor={(item, index) => 'Comment' + index}
        renderItem={({item}) => (
          <RecentCard onPress={() => showModal(GUIDE_SCREEN.name, {...item})} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

const mapStateToProps = state => ({
  search: state.search,
});

function mapDispatchToProps(dispatch) {
  return {
    setQuery: spam => dispatch(_SET_QUERY(spam)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recents);
