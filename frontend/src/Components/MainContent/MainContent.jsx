import React from 'react'
import Overlay from '../Overlay/Overlay'
import Menu from '../Menu/Menu'
import Home from '../../Views/Home'
import Ratings from '../../Views/Ratings/Ratings'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { displayModalAction } from '../../Store/Actions/modalActions/modalActions'
import { closeModalAction } from '../../Store/Actions/modalActions/modalActions'


class MainContent extends React.Component {

  render() {
    const { isModalOpened } = this.props.modal
    return (
      <React.Fragment>
        <Menu />
        {isModalOpened && <Overlay />}
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

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  openModal: (payload) => dispatch(displayModalAction(payload)),
  closeModal: () => dispatch(closeModalAction())

});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);

