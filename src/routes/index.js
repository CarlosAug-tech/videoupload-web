import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Watch from '../pages/Watch';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Profile from '../pages/Profile';
import MyVideos from '../pages/MyVideos';
import AddVideo from '../pages/Video/_addVideo';
import EditVideo from '../pages/Video/_editVideo';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/watch/:id" component={Watch} />

      <Route path="/signIn" component={SignIn} isAuth />
      <Route path="/register" component={SignUp} isAuth />

      <Route path="/profile/" component={Profile} isPrivate />
      <Route path="/myVideos/" component={MyVideos} isPrivate />
      <Route path="/addVideo/" component={AddVideo} isPrivate />
      <Route path="/editVideo/:id" component={EditVideo} isPrivate />

      {/* <Route path="/watch/:id" /> */}
    </Switch>
  );
}
