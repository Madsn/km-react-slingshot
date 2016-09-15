import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>
          <li><Link to="/new-booking"  activeClassName="active"/>New booking</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
