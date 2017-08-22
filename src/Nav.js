import React from 'react';
import {Link} from 'react-router';
import Logo from './Logo';

const Nav = ({children, title}) => (
  <div className="nav-page">
    <nav className="nav">
      <Logo />
      <h1>
        <Link to="/">Games</Link>
        { Boolean(title) &&
          ` / ${title}`
        }
      </h1>
      <Link to="/new">+</Link>
    </nav>
    {children}
  </div>
);

export default Nav;
