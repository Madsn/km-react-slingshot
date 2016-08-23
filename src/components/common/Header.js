import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li><a><IndexLink to="/" activeClassName="active">Home</IndexLink></a></li>
          <li><a>Bla bla</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
