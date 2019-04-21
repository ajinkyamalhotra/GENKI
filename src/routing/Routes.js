import React from "react";
import { Switch } from "react-router-dom";
import AppliedRoute from './AppliedRoute';
import HomePage from '../components/HomePage';
import Game from '../Game';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import SignUpConfirmation from '../components/SignUpConfirmation';

/**
 * This change prevents the non-logged in user to have access to profile, game,
 * progress, home and logout.
 * All these pages do render but the user wont have access to any of these pages
 */
function renderSwitchObj(childProps) {
    let switchObj;
    if (childProps.isAuthenticated) {
        switchObj =
          <Switch>
              <AppliedRoute
                exact
                path='/Home'
                component={HomePage}
                props={childProps}/>

              <AppliedRoute
                exact path='/Game'
                component={Game}
                props={childProps}/>

              <AppliedRoute
                exact
                path='/Login'
                component={Login}
                props={childProps}/>

              <AppliedRoute
                exact
                path='/SignUp'
                component={SignUp}
                props={childProps}/>

              <AppliedRoute
                exact
                path='/SignUpConfirmation'
                component={SignUpConfirmation}
                props={childProps}/>

          </Switch>
    } else {
        switchObj =
          <Switch>
              <AppliedRoute
                exact
                path='/Login'
                component={Login}
                props={childProps}/>

              <AppliedRoute
                exact
                path='/SignUp'
                component={SignUp}
                props={childProps}/>

          </Switch>
    }
    return switchObj;
}

export default ({childProps}) => (
  renderSwitchObj(childProps)
);
