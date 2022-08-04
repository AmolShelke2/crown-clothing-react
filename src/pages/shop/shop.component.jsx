import React from 'react';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router';
import CategoryPage from '../category/category.component';

const ShopPage = ({ match }) => {
  console.log(match);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};
export default ShopPage;
