import React, { Component } from 'react'
import './styles.scss'

class ResultMessage extends Component {
  render() {
    return (
      <div className="resultMessageContainer">
        <div className='resultCounter'>{this.props.count}</div>
        <div className='resultText'>
          Some lorem texik
          <br />
          {this.props.text}  
        </div>
      </div>
    )
  }
}

export default ResultMessage
