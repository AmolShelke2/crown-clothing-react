import React from 'react';
import { connect } from 'react-redux/es/exports';

import { toggleCartHidden } from '../../redux/cart/cart-action';

import './cart-component.styles.scss';
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
