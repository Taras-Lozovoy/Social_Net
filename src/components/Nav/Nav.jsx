import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from "./Nav.module.css";

const Nav = () => {
  return  <nav className={cl.nav}>
            <div>
              <NavLink to="/profile" className={cl.item} activeClassName={cl.active}>Profile</NavLink>
            </div>
            <div>
              <NavLink to="/dialogs" className={cl.item} activeClassName={cl.active}>Messages</NavLink>
            </div>
            <div>
              <NavLink to="/news" className={cl.item} activeClassName={cl.active}>News</NavLink>
            </div>
            <div>
              <NavLink to="/users" className={cl.item} activeClassName={cl.active}>Users</NavLink>
            </div>
            <div>
              <NavLink to="/music" className={cl.item} activeClassName={cl.active}>Music</NavLink>
            </div>
            <div>
              <NavLink to="/settings" className={cl.item} activeClassName={cl.active}>Settings</NavLink>
            </div>
          </nav>
}

export default Nav;