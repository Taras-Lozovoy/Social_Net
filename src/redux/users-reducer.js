import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET-USERS';
const SETCURRENTPAGE = 'SET-CURRENT-PAGE';
const SETTOTALUSERSCOUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLEPRELOADER = 'TOGGLE-PRELOADER';
const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';


let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followInProgress: [14231, 14229, 14601],
};

const usersReducer = (state = initialState, action) => {
	switch(action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map (u => {
					if(u.id === action.userId){
						return {...u, followed: true}
					};
					return u;
				})
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map (u => {
					if(u.id === action.userId){
						return {...u, followed: false}
					};
					return u;
				})
			};
		case SETUSERS:
			return {
				...state,
				users:  [...action.users],
			};
		case SETCURRENTPAGE:
			return {
				...state,
				currentPage: action.currentPage,
			};
		case SETTOTALUSERSCOUNT:
			return {
				...state,
				totalUsersCount: action.totalUsersCount,
			};
		case TOGGLEPRELOADER:
			return {
				...state,
				isFetching: action.isFetching,
			};
		case TOGGLE_FOLLOW:
			return {
				...state,
				followInProgress: action.isFetching
					?[...state.followInProgress, action.userId]
					:state.followInProgress.filter(id => id != action.userId),
			};	
		default:
			return state;			
	};
};

export const followSuccess = (userId) => {
  return {
		type: FOLLOW,
		userId: userId,
  }
};

export const unfollowSuccess = (userId) => {
  return {
		type: UNFOLLOW,
		userId: userId,
  }
};

export const setUsers = (users) => {
	return {
		type: SETUSERS,
		users: users,
	}
};

export const setCurrentPage = (currentPage) => {
	return {
		type: SETCURRENTPAGE,
		currentPage: currentPage,
	}
};

export const setTotalUsersCount = (totalUsersCount) => {
	return {
		type: SETTOTALUSERSCOUNT,
		totalUsersCount: totalUsersCount,
	}
};

export const togglePreloader = (isFetching) => {
	return {
		type: TOGGLEPRELOADER,
		isFetching: isFetching,
	}
};

export const toggleFollow = (isFetching, userId) => {
	return {
		type: TOGGLE_FOLLOW,
		isFetching,
		userId,
	}
};

export const requestUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(togglePreloader(true));
		dispatch(setCurrentPage(currentPage));
			usersAPI.requestUsers(currentPage, pageSize)
			.then(data =>{
				dispatch(togglePreloader(false));
				dispatch(setUsers(data.items));
				dispatch(setTotalUsersCount(data.totalCount));
			});
		}
};

export const follow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollow(true, userId));
			usersAPI.follow(userId)
			.then(response =>{
				if(response.data.resultcode == 0) {
					dispatch(followSuccess(userId));
				};
				dispatch(toggleFollow(false, userId));
			});
	}		
};

export const unfollow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollow(true, userId));
			usersAPI.unfollow(userId)
			.then(response =>{
				if(response.data.resultcode == 0) {
					dispatch(unfollowSuccess(userId));
				};
				dispatch(toggleFollow(true, userId));
			});
	}
};

export default usersReducer;