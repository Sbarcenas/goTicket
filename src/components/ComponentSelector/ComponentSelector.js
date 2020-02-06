import React from 'react';

const ComponentSelector = props => {
  const {componentList, meta} = props;
  const MatchingComponent = componentList[meta.componentName];
  return <MatchingComponent {...props} />;
};

export default ComponentSelector;
