import SHOP_DATA from './shop-data';

const INITAL_STATE = {
  collections: SHOP_DATA,
};

export const shopReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
