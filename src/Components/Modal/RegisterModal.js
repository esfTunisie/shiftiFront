import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm  from '../Forms/RegisterForm';
import FocusTrap from 'focus-trap-react';
import { Component } from 'react';
class RegisterModal extends Component {

    render(){

        return ReactDOM.createPortal(
            <FocusTrap>
              <aside
                tag="aside"
                role="dialog"
                tabIndex="-1"
                aria-modal="true"
                className="modal-cover"
                onClick={this.props.onClickOutside}
                onKeyDown={this.props.onKeyDown}
              >
                <div className="modal-area" ref={this.props.modalRef}>
                  <button
                    ref={this.props.buttonRef}
                    aria-label="Close Modal"
                    aria-labelledby="close-modal"
                    className="_modal-close"
                    onClick={this.props.closeModal}
                  >
                    <span id="close-modal" className="_hide-visual">
                      Close
                    </span>
                    <svg className="_modal-close-icon" viewBox="0 0 40 40">
                      <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                    </svg>
                  </button>
                  <div className="modal-body">
                    <RegisterForm onSubmit={this.props.onSubmit} />
                  </div>
                </div>
              </aside>
            </FocusTrap>,
            document.body
          );
    }
  
};

export default RegisterModal;