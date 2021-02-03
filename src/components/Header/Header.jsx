import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from "./Header.module.css"

const Header = (props) => {
  return  <header className={cl.header}>
            <img src="https://image.similarpng.com/very-thumbnail/2020/09/Samurai-warrior-war-helm-Premium-Vector-PNG.png"/>
            <div className={cl.loginBlock}>
              {props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
          </header>
}

export default Header;