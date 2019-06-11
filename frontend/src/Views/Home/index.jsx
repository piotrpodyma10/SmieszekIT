import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

class Home extends Component {
  render() {
    return (
      <div className="Container">
        Some example data
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect ( 
  mapStateToProps, {
  }
)(Home)