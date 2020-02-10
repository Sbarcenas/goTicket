/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {connect} from 'react-redux';
import algoliasearch from 'algoliasearch/lite';
import {
  Configure,
  connectHits,
  Index,
  InstantSearch,
} from 'react-instantsearch-native';
import {_SET_RESULTS} from '../../../redux/actions/searchActions';
const searchClient = algoliasearch(
  'DT1FRH8HXE',
  'a7ed77937679ddce485b17da4cd219f3',
);
/**
 * @return {null}
 */
function ResultWrap({keyResult, hits, setResults}) {
  React.useEffect(() => {
    setResults(keyResult, hits);
  }, [hits]);
  return null;
}
const Results = connectHits(({keyResult, hits, setResults}) => (
  <ResultWrap keyResult={keyResult} hits={hits} setResults={setResults} />
));

function WrapReduxSearch(props) {
  const {keys} = props;
  return (
    <InstantSearch searchClient={searchClient} indexName="blogs">
      {keys.map(key => (
        <Index indexName={key.index}>
          <Configure
            query={key.query}
            hitsPerPage={key.limit || 20}
            facets={key.facets || []}
            facetFilters={key.facetFilters || []}
            filters={key.filters}
          />
          <Results keyResult={key.key} setResults={props.setResults} />
        </Index>
      ))}
    </InstantSearch>
  );
}

const mapStateToProps = state => ({
  search: state.search,
});

function mapDispatchToProps(dispatch) {
  return {
    setResults: (key, values) => dispatch(_SET_RESULTS({key, values})),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WrapReduxSearch);
