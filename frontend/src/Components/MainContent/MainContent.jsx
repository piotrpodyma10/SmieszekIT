import React from 'react'
import Overlay from '../Overlay/Overlay'
import Menu from '../Menu/Menu'
import Home from '../../Views/Home'
import Ratings from '../../Views/Ratings/Ratings'
import { Route } from 'react-router-dom'

class MainContent extends React.Component {
  state = {
    displayModal: true
  }

  openModal = () => {
    this.setState({ displayModal: !this.state.displayModal })
  }

  render() {
    return (
      <React.Fragment>
        <Menu />
        {this.state.displayModal && <Overlay openModal={this.openModal} />}
        <Route 
          exact 
          component ={Home}
          path="/" 
        />
        <Route 
          exact 
          component={Ratings}
          path="/rating" 
        />
      </React.Fragment>
    )
  }
}

export default MainContent
