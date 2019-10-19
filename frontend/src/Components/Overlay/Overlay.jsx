import React from 'react'
import './styles.scss'

class Overlay extends React.Component {
  render() {
    return (
      <div className="overlayContainer">
        <div className="modalContainer">
          X
          <button
            onClick={this.props.openModal}
          >Click here!</button>  
        </div>
      </div>
    )
  }
}

export default Overlay
