import React from 'react'

var App = React.createClass({
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

export { App, Home, Exam, Report }

// export Home from './Home'
// export Exam from './Exam'
