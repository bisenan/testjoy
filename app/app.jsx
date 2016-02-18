'use strict';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { syncHistory, routeReducer } from 'react-router-redux'
import { App, Home, Exam, Report } from './containers/index.jsx'
import reducers from './reducers/index.jsx'

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)

const store = createStoreWithMiddleware(reducer)
reduxRouterMiddleware.listenForReplays(store)

let root = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route name="App" path="/" component={App}>
        <IndexRoute name="Home" component={Home}/>
        <Route name="Exam" path="/exams/:examId" component={Exam}/>
        <Route name="Report" path="/reports/:reportId" component={Report}/>
      </Route>
    </Router>
  </Provider>
);

render(root, document.getElementById('root'))
