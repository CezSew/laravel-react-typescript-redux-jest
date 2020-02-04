
import * as React from 'react';
import {BrowserRouter , Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import AuthComponent from './components/pages/AuthComponent';
import Protected from './components/pages/Protected';

export const RouterComponent = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <AuthComponent>
          <Route path={'/protected'} component={Protected} />
        </AuthComponent>
      </Switch>
    </BrowserRouter>
);
