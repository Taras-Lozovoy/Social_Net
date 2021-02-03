import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    
    profilePage:{
      posts: [
        {id:1, message:'Wassup Bro!!!!', likes: 10, src:'https://image.similarpng.com/very-thumbnail/2020/09/Samurai-warrior-war-helm-Premium-Vector-PNG.png'},
        {id:2, message:'I\'ll be back', likes: 5, src:'https://pngimg.com/uploads/samurai/samurai_PNG3.png'},
        {id:3, message:'See Ya', likes: 15, src:'https://i.pinimg.com/originals/7f/e1/92/7fe192806e4f48dad849363337ea0f66.png'},
        {id:4, message:'Call Me later', likes: 1, src:'https://toppng.com/uploads/preview/for-honor-samurai-for-honour-game-game-info-art-samurai-logo-for-honor-11563506202noawodryrz.png'},
      ],
      
      newPostText: 'Samurai',
  
    },
  
    dialogsPage:{
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

      newMessageText: '',
    },
    
    sideBar:{
      
    },
  },

  _rerenderEntireTree () {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },

  subscribe (observer) {
    this._rerenderEntireTree = observer;
  },  

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);
    this._rerenderEntireTree(this._state);
  },
};

window.store = store;

export default store;