import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import suki from '../../Assets/imgs/suki1.jpg'
import test from '../../Assets/imgs/test.png'

class Ratings extends Component {
  state = {
    elements: ['Die erste etape', 'Secondo Tempo', 'Di Trevi mala', 'Gezutzetzen', 'Makoniatonelii Abarah']
  }

  render() {
    const last = this.state.elements.length
    return (
      <div className="Container">
        <div className="fun">
          {this.state.elements.map((kot, index) => {

            if ((index+1) === last) {
              return (
                <div className="kotel" style={{ marginBottom: `${50* (index+1)}px`}}>
                  <div className="text">{kot}</div>
                  <img src={test} style={{ height: '100px', width: '100px'}} />
                </div>
              )
            } else {
              return (
                <div className="kotel" style={{ marginBottom: `${50* (index+1)}px`}}>
                  <div className="text">{kot}</div>
                  <img src={test} style={{ height: '100px', width: '100px'}} />
                  <div className="line">
                    <div className="firstLine"></div>
                    <div className="secondLine"></div>
                    <div className="thirdLine"></div>
                  </div>
                </div>
              )
            }
          })}
        </div>
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
)(Ratings)