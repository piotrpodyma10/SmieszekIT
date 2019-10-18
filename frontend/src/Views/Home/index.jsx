import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import ResultMessage from '../../Components/ResultMessage/ResultMessage'
import ResultMessages from '../../Components/ResultMessages/ResultMessages'

class Home extends Component {
  render() {
    return (
      <div className="Container">
        <ResultMessages />
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