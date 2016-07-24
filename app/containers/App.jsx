import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DevTools from './DevTools.jsx'

export default class App extends Component {
  render() {
    const { children, errorMessage } = this.props
    return (
      <div>
        <nav>--- header ---</nav>
        <span>{errorMessage}</span>
        {children}
        <nav>--- footer ---</nav>
        <DevTools />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
  errorMessage: PropTypes.string
}

function mapStateToProps(state, ownProps) {
  return {
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, {})(App)
