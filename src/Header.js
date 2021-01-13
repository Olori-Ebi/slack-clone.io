import {Avatar} from '@material-ui/core';
import {AccessTime, HelpOutline, Search} from '@material-ui/icons';
import React from 'react';
import './Header.css';
import {useStateValue} from './StateProvider';

function Header () {
  const [{user}] = useStateValue ();
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatars for logged in user */}
        <Avatar className="header__avatar" alt={user?.displayName} src={user?.photoURL} />

        {/* TIme Icon */}
        <AccessTime />
      </div>
      <div className="header__search">
        {/* Search Icon */}
        <Search />
        {/* Input */}
        <input placeholder="Search Eyiyemi..." />
      </div>
      <div className="header__right">
        {/* Help Icon */}
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
