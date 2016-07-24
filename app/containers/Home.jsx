import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h2><Link to="exams">基本情報試験</Link></h2>
        </div>
        <div className="sample">
          <h2><Link to="exams/fe">応用情報試験</Link></h2>
        </div>
      </div>
    )
  }
}
