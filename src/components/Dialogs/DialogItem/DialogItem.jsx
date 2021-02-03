import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './DialogItem.module.css'; 

const DialogItem = (props) => {
    let path = "/dialogs" + props.id;
    return  <NavLink to={path} className={cl.item} activeClassName={cl.active}>{props.name}</NavLink>
}

export default DialogItem;