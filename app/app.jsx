'use strict';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


var Main = React.createClass({
  render() {
    return (
      <div>
        <h1>headr area</h1>
        {this.props.children}
      </div>
    );
  }
});

var Home = React.createClass({
  render() {
    return (
      <div>
        <h1>home</h1>
      </div>
    );
  }
});

var Exam = React.createClass({
  render() {
    const { examId } = this.props.params

    return (
      <div>
        <h1>exam</h1>
        <span>{examId}</span>
      </div>
    );
  }
});

var Report = React.createClass({
  render() {
    const { reportId } = this.props.params

    return (
      <div>
        <h1>report</h1>
        <span>{reportId}</span>
      </div>
    );
  }
});

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
    <Route name="Main" path="/" component={Main}>
      <IndexRoute name="Home" path="/" component={Home}/>
      <Route name="Exam" path="/exams/:examId" component={Exam}/>
      <Route name="Report" path="/reports/:reportId" component={Report}/>
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>
);

render(routes, document.getElementById('testjoy-app'))