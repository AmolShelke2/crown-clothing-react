import React from 'react';
import { connect } from 'react-redux/es/exports';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart-action';
import { selectCartItemsCount } from '../../redux/cart/cart.reselect';

import './cart-component.styles.scss';
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
