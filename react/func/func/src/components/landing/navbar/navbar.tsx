import React, { useState } from "react";
import logo from "../../../img/logo.svg";
import './navbar.css';

interface NavbarProps{
    togglePopupSignUpModal: () => void;
    togglePopupLogInModal: () => void;
    togglePopupMenu: () => void;

    isOpenSignUpModal: boolean;
    isOpenLogInModal: boolean;
    isOpenMenu: boolean;
}

function Navbar(props: NavbarProps) {
    return (
        <header id="header" className="">
            <nav className="navbar">
                <img src={logo} className="nav-logo" alt="logo"/>

                <div className="navbar-menu-items">
                    <a href="#logo_block" className="menu-item">
                        Main
                    </a>
                    <a href="#about_block" className="menu-item">
                        About
                    </a>
                    <a href="#help_block" className="menu-item">
                        Help
                    </a>
                    <a href="#contacts_block" className="menu-item">
                        Contacts
                    </a>

                    <button className="sign_up_btn link_btn menu-item" onClick={props.togglePopupSignUpModal}>
                        Sign up
                    </button>
                    <button className="log_in_btn link_btn menu-item" onClick={props.togglePopupLogInModal}>
                        Log in
                    </button>
                </div>

                <div className="dropdown hidden">
                    <button className="hamburger-icon" onClick={props.togglePopupMenu}>
                        <span>&#9776;</span>
                    </button>
                </div>

            </nav>
        </header>
    );
}

export default Navbar;