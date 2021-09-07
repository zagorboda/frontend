import React, { useState } from "react";
import {SignUpModal, LogInModal, Menu} from '../modals/modal';
import Navbar from '../navbar/navbar';
import Content from '../content/content';
import Footer from '../footer/footer'
import './app.css';

function App() {
    const [isOpenSignUpModal, setIsOpenSignUpModal] = useState(false);

    const togglePopupSignUpModal = () => {
        setIsOpenSignUpModal(!isOpenSignUpModal);
    }

    const [isOpenLogInModal, setIsOpenLogInModal] = useState(false);

    const togglePopupLogInModal = () => {
        setIsOpenLogInModal(!isOpenLogInModal);
    }

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const togglePopupMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    return (
        <>
            <Navbar
                isOpenSignUpModal={isOpenSignUpModal}
                togglePopupSignUpModal={togglePopupSignUpModal}
                isOpenLogInModal={isOpenLogInModal}
                togglePopupLogInModal={togglePopupLogInModal}
                isOpenMenu={isOpenMenu}
                togglePopupMenu={togglePopupMenu}
            />

            {isOpenSignUpModal &&
                <SignUpModal handleClose={togglePopupSignUpModal}/>
            }
            {isOpenLogInModal &&
                <LogInModal handleClose={togglePopupLogInModal}/>
            }

            {isOpenMenu &&
            <Menu handleClose={togglePopupMenu}
                  isOpenSignUpModal={isOpenSignUpModal}
                  togglePopupSignUpModal={togglePopupSignUpModal}
                  isOpenLogInModal={isOpenLogInModal}
                  togglePopupLogInModal={togglePopupLogInModal}
            />
            }

            <Content/>

            <Footer/>

        </>
    );
}

export default App;