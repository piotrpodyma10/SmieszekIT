import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import ResultMessage from '../../Components/ResultMessage/ResultMessage'
import ResultMessages from '../../Components/ResultMessages/ResultMessages'
import { notDisplayModalAction } from '../../Store/Actions/modalActions/modalActions'
import { displayModalAction } from '../../Store/Actions/modalActions/modalActions'


class Home extends Component {
  render() {
    const { modal, openModal } = this.props
    console.log('KIKI', this.props)
    console.log('this.props.modal.isModalOpened', modal.isModalOpened)
    return (
      <div className="Container">
        <button onClick={() => openModal(!modal.isModalOpened)}>CHECK IT OUT!</button>
        <ResultMessages />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  openModal: (payload) => dispatch(displayModalAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);