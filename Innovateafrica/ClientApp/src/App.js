import React, { Component } from 'react';
import { Route } from 'react-router';
// import { Layout } from './components/Layout';

// import { Home } from './components/Home';
// import { FetchData } from './components/FetchData';
// import { Counter } from './components/Counter';

import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </>
    );
  }
}
