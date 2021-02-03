const sendMessage = 'SEND-MESSAGE';

let initialState = {
	dialogs: [
	  {id:1, name:'Vasya'},
	  {id:2, name:'Eva'},
	  {id:3, name:'Klava'},
	  {id:4, name:'Anna'},
	  {id:5, name:'Kolia'},
	  {id:6, name:'Anastasia'},
	  {id:7, name:'Taras'},
	  {id:8, name:'Tolik'},
	],
  
	messages: [
	  {id: 1, message:'Wassup man'},
	  {id: 2, message:'Party tonight?'},
	  {id: 3, message:'I got YA'},
	],
  };

const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case sendMessage:
			let body = action.newMessageText;
			return {
				...state,
				messages: [...state.messages, {id: 5, message: body}],
			};			
		default:
			return state;			
	};
};

export const sendMessageCreator = (newMessageText) => {
	return {
		type: sendMessage,
		newMessageText,
	}
};


export default dialogsReducer;