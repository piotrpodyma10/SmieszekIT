import React, { Component } from 'react'
import likeIcon from '../../Assets/Icons/like.svg'
import likeIcon2 from '../../Assets/Icons/like1.svg'
import './styles.scss'
import ReactSVG from 'react-svg'

class ResultMessage extends Component {
  render() {
    return (
      <div className="resultMessageContainer">
        <div className='resultCounter'>{this.props.count}</div>
        <div className='resultText'>
          Some lorem texik <ReactSVG src={likeIcon} />
          Some lorem texik <ReactSVG src={likeIcon2} />
          <br />
          {this.props.text}  
        </div>
      </div>
    )
  }
}

export default ResultMessage
