import { profileAPI } from '../api/api';

const addPost = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState =  {
	posts: [
	  {id:1, message:'Wassup Bro!!!!', likes: 10, src:'https://image.similarpng.com/very-thumbnail/2020/09/Samurai-warrior-war-helm-Premium-Vector-PNG.png'},
	  {id:2, message:'I\'ll be back', likes: 5, src:'https://pngimg.com/uploads/samurai/samurai_PNG3.png'},
	  {id:3, message:'See Ya', likes: 15, src:'https://i.pinimg.com/originals/7f/e1/92/7fe192806e4f48dad849363337ea0f66.png'},
	  {id:4, message:'Call Me later', likes: 1, src:'https://toppng.com/uploads/preview/for-honor-samurai-for-honour-game-game-info-art-samurai-logo-for-honor-11563506202noawodryrz.png'},
	],
	profile: null,
	status: '',
  };

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case addPost:
			let newPost = {
					id:5,
					message: action.newPostText,
					likes:0,
					src:'https://pngimg.com/uploads/samurai/samurai_PNG3.png',
			};
			return {
				...state,
				posts:[...state.posts, newPost],
			};
		case	SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			};
		case	SET_STATUS:
			return {
				...state,
				status: action.status,
			};	
		default:
			return state;
	};
};

export const addPostCreator = (newPostText) => {
	return {
		type: addPost,
		newPostText
	}
};

export const setUserProfile = (profile) => {
	return {
		type: SET_USER_PROFILE,
		profile: profile,
	}
};

export const setStatus = (status) => {
	return {
		type: SET_STATUS,
		status: status,
	}
};

export const getUsersProfile = (userId) => (dispatch) => {
	profileAPI.getProfile(userId).then(response => {
		dispatch(setUserProfile(response.data));
	});	
};

export const getStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId).then(response => {
		dispatch(setStatus(response.data));
	});	
};

export const updateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then(response => {
		if(response.data.resultCode === 0) {
			dispatch(setStatus(status));
		};
	});	
};

export default profileReducer;