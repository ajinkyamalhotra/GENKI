import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from './AppliedRoute';
import HomePage from '../components/HomePage';
import Game from '../Game';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Progress from '../components/Progress';
import SignUp from '../components/SignUp';
import SignUpConfirmation from '../components/SignUpConfirmation';

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute
      exact
      path='/'
      component={HomePage}
      props={childProps} />

    <AppliedRoute exact path='/Game' component={Game} props={childProps} />

    <AppliedRoute
      exact
      path='/Login'
      component={Login}
      props={childProps} />

    <AppliedRoute
      exact
      path='/Profile'
      component={Profile}
      props={childProps} />

    <AppliedRoute exact path='/Progress' component={Progress} props={childProps} />

    <AppliedRoute
      exact
      path='/SignUp'
      component={SignUp}
      props={childProps} />

    <AppliedRoute
      exact
      path='/SignUpConfirmation'
      component={SignUpConfirmation}
      props={childProps} />

  </Switch>
);
