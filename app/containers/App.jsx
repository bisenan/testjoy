import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DevTools from './DevTools.jsx'

export default class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <nav>--- header ---</nav>
        {children}
        <nav>--- footer ---</nav>
        <DevTools />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}
