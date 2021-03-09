import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
// import FormData from './form_data.jsx';
import ProfileModal from './profile_modal'


function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    
    switch (modal) {
        case 'profile_modal':
            component = <ProfileModal/>
            break;
        default:
            return null;
    }
    return (
        <div className="modal_background" onClick={closeModal}>
            <div className="modal_child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
