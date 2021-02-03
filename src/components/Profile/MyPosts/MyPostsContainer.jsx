import React from "react";
import { connect } from "react-redux";
import { addPostCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
	return{
		posts: state.profilePage.posts,
	}
};

let mapDispatchToProps = (dispatch) => {
	 return{
		addPost: (newPostText) => {dispatch(addPostCreator(newPostText))},
	 }
};

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);
export default MyPostsContainer;