import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

const collectionPage = ({ match }) => {
  console.log(match.params.collectionId);

  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

export default collectionPage;

// Collection Routing and selector
