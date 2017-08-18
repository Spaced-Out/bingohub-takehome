import React from 'react';
import {Link} from 'react-router';


const Nav = ({children, title}) => (
  <div className="nav-page">
    <nav className="nav">
      { /* TODO add the logo */ }
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
