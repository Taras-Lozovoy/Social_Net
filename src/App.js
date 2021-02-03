import React from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/Preloader';
// import Music from './components/Music/Music';
// import Settings from './compone nts/Settings/Settings';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  };

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className="app_wrapper">
          <HeaderContainer />
          <Nav />
          <div className="app_wrapper_content">
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login/>} />
            {/* <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} /> */}
          </div>
        </div>
      </BrowserRouter> 
    );
  }
 
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}),
)  (App);
