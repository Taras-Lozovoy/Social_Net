import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return{
		dialogsPage: state.dialogsPage,
	}
};

let mapDispatchToProps = (dispatch) => {
	return{
		sendMessage: (newMessageText) => {dispatch (sendMessageCreator(newMessageText))},
	}
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect,
)
(Dialogs);