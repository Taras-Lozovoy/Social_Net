import React from 'react';
import cl from './Users.module.css'
import userPhoto from '../../assets/img/user.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);

		let pages = [];

		for(let i=1; i<=pagesCount; i++) {
			pages.push(i);
		};

	return <div>
		<div className={cl.pages}>
			{pages.map(p => {
				return <span className={props.currentPage === p && cl.active}
								onClick={() => {props.onPageChanged(p)}}>{p}</span>
			})}
		</div>	
	{props.users.map (u => <div key={u.id}>
		<span>
			<div>
				<NavLink to={'/profile/' + u.id}>
					<img src={u.photos.small != null ? u.photos.small : userPhoto} className={cl.photo} />
				</NavLink>
			</div>
			<div>
				{ u.followed 
					? <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {
						props.unfollow(true, u.id)}}>UnFollow</button>

					: <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {
						props.follow(true, u.id)}}>Follow</button>}
			</div>
		</span>
		<span>
			<span>
				<div>{u.name}</div>
				<div>{u.status}</div>
			</span>
			<span>
				<div>{"u.location.country"}</div>
				<div>{"u.location.city"}</div>
			</span>
		</span>
	</div>	
	)}
</div>

};



export default Users;