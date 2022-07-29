import React from 'react';
import { Link } from 'react-router-dom';

import { connect, Connect } from 'react-redux/es/exports';

import { ReactComponent as Logo } from '..//..//assets/crown.svg';
import { auth } from '../../firebase/firebase.utlis';

import './header-styles.scss';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateProps)(Header);
