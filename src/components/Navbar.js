import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <h1 class="text-gray-200 text-2xl leading-loose">Countries</h1>
        <hr />
        <div className="links">
            <NavLink to="/" className="link" activeClassName="active" exact>
            Countries List
            </NavLink>
            <NavLink to="/add" className="link" activeClassName="active">
            Profile
            </NavLink>
        </div>
        </header>
    );
};

export default Header;