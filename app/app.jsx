import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { syncHistory, routeReducer } from 'react-router-redux'
import { App, Home, Exam, Report, DevTools, NotFound } from './containers/index.jsx'
import reducers from './reducers/index.jsx'

const reducer = combineReducers(Object.assign(reducers, { routing: routeReducer }))
const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)

const store = createStoreWithMiddleware(reducer, DevTools.instrument())
reduxRouterMiddleware.listenForReplays(store)

let Root = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route name="App" path="/" component={App}>
        <IndexRoute name="Home" component={Home}/>
        <Route name="Exam" path="/exams/:examId" component={Exam}/>
        <Route name="Report" path="/reports/:reportId" component={Report}/>
      </Route>
      <Route name="NotFound" path="*" component={NotFound} />
    </Router>
  </Provider>
);

render(Root, document.getElementById('root'))
