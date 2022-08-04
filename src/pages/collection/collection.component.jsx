import React from 'react';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selector';

import './collection.styles.scss';

const collectionPage = ({ collection }) => {
  console.log(collection);

  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(collectionPage);
