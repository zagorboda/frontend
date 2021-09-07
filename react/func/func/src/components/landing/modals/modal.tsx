import logo from "../../../img/logo.svg";
import './modal.css';
import React from "react";

interface ModalProps {
    handleClose: () => void;
}

interface MenuModal{
    togglePopupSignUpModal: () => void;
    togglePopupLogInModal: () => void;
    handleClose: () => void;

    isOpenSignUpModal: boolean;
    isOpenLogInModal: boolean;
}

function SignUpModal(props: ModalProps) {
    return (
        <div id="sign_up" className="modal">
            <div className="modal-content">
                <button id="close_sign_up" className="close-btn" onClick={props.handleClose}><span>&times;</span></button>
                <br/> <br/>
                <img src={logo} className="modal-logo" alt="logo"/>
                    <div className="">
                        <input className="modal-input" required id="sign_up_email" type="text" name="email"
                        placeholder="Enter your email ..." />
                        <input className="modal-input" required id="sign_up_password" type="text" name="password"
                        placeholder="Enter your password ..." />
                        <input className="modal-input" required id="sign_up_password_confirm" type="text"
                        name="password_confirm" placeholder="Confirm your password ..." />

                        <button type="submit" className="submit">Submit</button>
                    </div>
            </div>
        </div>
    );
}

function LogInModal(props: ModalProps) {
    return (
        <div id="log_in" className="modal">
            <div className="modal-content">
                <button id="close_log_in" className="close-btn" onClick={props.handleClose}><span>&times;</span></button>
                <br /> <br />
                <img src={logo} className="modal-logo" alt="logo"/>
                <div className="">
                    <input className="modal-input" required id="log_in_email" type="text" name="email"
                           placeholder="Enter your email ..." />
                    <input className="modal-input" required id="log_in_password" type="text" name="password"
                           placeholder="Enter your password ..." />

                    <button type="submit" className="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}

function Menu(props: MenuModal) {
    return (
        <div className="dropdown-content">
            <a href="#logo_block" className="dropdown-element">
                Main
            </a>
            <a href="#about_block" className="dropdown-element">
                About
            </a>
            <a href="#help_block" className="dropdown-element">
                Help
            </a>
            <a href="#contacts_block" className="dropdown-element">
                Contacts
            </a>

            <button className="sign_up_btn dropdown-element" onClick={props.togglePopupSignUpModal}>
                Sign up
            </button>
            <button className="log_in_btn dropdown-element text-gray-900 bg-green-300 text-center" onClick={props.togglePopupLogInModal}>
                Log in
            </button>
        </div>
    )
}

export {SignUpModal, LogInModal, Menu};
