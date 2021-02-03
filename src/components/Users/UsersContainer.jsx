import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, toggleFollow, requestUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowInProgress, getToggleFollow } from '../../redux/users-selectors';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize);
	};

	onPageChanged = (pageNum) => {
		this.props.requestUsers(pageNum, this.props.pageSize);
	};

	render() {

		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users  totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					followInProgress={this.props.followInProgress}
					toggleFollow={this.props.toggleFollow} />
		</>
	};
};

// let mapStateToProps = (state) => {
//   	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followInProgress: state.usersPage.followInProgress,
// 		toggleFollow: state.usersPage.toggleFollow,
// 	};  
// };


let mapStateToProps = (state) => {
	return {
		  users: getUsers(state),
		  pageSize: getPageSize(state),
		  totalUsersCount: getTotalUsersCount(state),
		  currentPage: getCurrentPage(state),
		  isFetching: getIsFetching(state),
		  followInProgress: getFollowInProgress(state),
		  toggleFollow: getToggleFollow(state),
	};  
};

export default compose
	(connect (mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollow, requestUsers}),
	withAuthRedirect,)
	(UsersContainer);