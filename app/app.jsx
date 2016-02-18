'use strict';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { App, Home, Exam, Report } from './components/index.jsx'

var NotFound = React.createClass({
  render: function () {
    return (
      <div>
        <span>NOT FOUND</span>
      </div>
    );
  }
});

var routes = (
  <Router history={browserHistory}>
    <Route name="App" path="/" component={App}>
      <IndexRoute name="Home" component={Home}/>
      <Route name="Exam" path="/exams/:examId" component={Exam}/>
      <Route name="Report" path="/reports/:reportId" component={Report}/>
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>
);

render(routes, document.getElementById('testjoy-app'))
