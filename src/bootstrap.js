import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Route, Switch } from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import "./style/main.scss";
import Layout from "./components/layout";
import history from './history'; 
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup'; 

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}> 
        <Layout>
          <Switch>
            <Route exact path='/' component={SignIn} /> 
            <Route path='/signin' component={SignIn} /> 
            <Route path='/signup' component={SignUp} /> 
          </Switch>
        </Layout> 
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
