import React from 'react'
import { connect } from 'react-redux'
import { displayModalAction } from '../../Store/Actions/modalActions/modalActions'
import { closeModalAction } from '../../Store/Actions/modalActions/modalActions'
import './styles.scss'

class Overlay extends React.Component {


  closeModal = async () => {
    this.props.closeModal()
    setTimeout(() => this.props.openModal(false), 1000);
  }


  render() {
    console.log('TKI', this.props)
    const { closeModal } = this.props.modal
    return (
      <React.Fragment>
        <div className={`overlayContainer ${closeModal && 'closeAnimation'}`}
          onClick={() => this.props.openModal(false)}
        >
        </div>

        <div className={`modalContainer ${closeModal && 'closeAnimation'}`}>
          <div className="modal">
            X
            <button
              onClick={() => this.props.openModal(false)}
            >
              Click here!
            </button>

            <button
              onClick={() => this.closeModal()}
            >
              Click here! NOWEEE KUWA
            </button>  
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
