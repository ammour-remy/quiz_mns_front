import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navList.css';

function NavList(props) {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {props.addStyle && (
                <article id='custom-button-nav' className={`menu-toggle bgSecondary rounded-4 ${props.addStyle}`}>
                    <button className="btn h-100 w-100 text-white" onClick={toggleMenu}>
                    <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'} text-white fs-1`}></i>
                    </button>
                </article>
            )}
            <nav className={`d-lg-flex flex-column justify-content-between ${isOpen ? 'd-block custom-nav position-absolute bgSecondary vw-100 d-lg-none' : 'd-none d-lg-block'}`}>
                <ul className='list-unstyled h-100 m-0'>
                    <li className='d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle'>
                        <Link
                            to="/home"
                            className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 m-1 ${location.pathname === '/home' ? 'active' : 'text-white'}`}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li className='d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle'>
                        <Link
                            to="/inscription"
                            className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 m-1 ${location.pathname === '/administration' ? 'active' : 'text-white'}`}
                        >
                            Administration
                        </Link>
                    </li>
                    <li className='d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle'>
                        <Link
                            to="/profil"
                            className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100  m-1 ${location.pathname === '/profil' ? 'active' : 'text-white'}`}
                        >
                            Profil
                        </Link>
                    </li>
                    <li className='d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle'>
                        <Link
                            to="/quiz-disponibles"
                            className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 m-1 ${location.pathname === '/quiz-disponibles' ? 'active' : 'text-white'}`}
                        >
                            Quiz disponibles
                        </Link>
                    </li>
                    <li className='d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle'>
                        <Link
                            to="/vos-quiz"
                            className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 m-1 ${location.pathname === '/vos-quiz' ? 'active' : 'text-white'}`}
                        >
                            Vos Quiz
                        </Link>
                    </li>
                    <li className='d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle'>
                        <Link
                            to="/legal-notice"
                            className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 m-1 ${location.pathname === '/legal-notice' ? 'active' : 'text-white'}`}
                        >
                            Mentions légales
                        </Link>
                    </li>
                    <li className='d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle'>
                        <Link
                            to="/privacy-policy"
                            className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 m-1 ${location.pathname === '/privacy-policy' ? 'active' : 'text-white'}`}
                        >
                            Politique de confidentialité
                        </Link>
                    </li>
                </ul>
                <p className='d-none d-lg-block text-center text-white'>Copyright © 2024 PAQUAM</p>
            </nav>
        </>
    );
}

export default NavList;
