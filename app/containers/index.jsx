import React from 'react'
import App from './App.jsx'
import Home from './Home.jsx'
import DevTools from './DevTools.jsx'

let Exam = React.createClass({
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

let Report = React.createClass({
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

let NotFound = React.createClass({
  render() {
    return (
      <div>
        <span>NOT FOUND</span>
      </div>
    );
  }
});

export { App, Home, Exam, Report, DevTools, NotFound }
