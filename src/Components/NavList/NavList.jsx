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
                    <button className="btn h-100 d-flex justify-content-center align-items-center w-100 text-white" onClick={toggleMenu}>
                    <i  className={`d-block bi ${isOpen ? 'bi-x' : 'bi-list'} text-white fs-1`}></i>
                    </button>
                </article>
            )}
            <nav className={`d-lg-flex flex-column justify-content-between ${isOpen ? 'd-block custom-nav position-absolute z-3 bgSecondary vw-100 d-lg-none' : 'd-none d-lg-block'}`}>
                <ul className='list-unstyled h-100 m-0'>
                    <li className='d-flex w-100 navStyle'>
                        <Link
                            to="/home"
                            className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center justify-content-center justify-content-lg-start w-100 m-1 ${location.pathname === '/home' ? 'active' : 'text-white'}`}
                        >
                            Accueil
                        </Link>
                    </li>
                    {/* <li className='d-flex w-100 navStyle'>
                        <Link
                            to="/administration"
                            className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center justify-content-center justify-content-lg-start w-100 m-1 ${location.pathname === '/administration' ? 'active' : 'text-white'}`}
                        >
                            Administration
                        </Link>
                    </li> */}
                    <li className='d-flex w-100 navStyle'>
                        <Link
                            to="/profil"
                            className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center justify-content-center justify-content-lg-start w-100  m-1 ${location.pathname === '/profil' ? 'active' : 'text-white'}`}
                        >
                            Profil
                        </Link>
                    </li>
                    <li className='d-flex w-100 navStyle'>
                        <Link
                            to="/quiz-disponibles"
                            className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center justify-content-center justify-content-lg-start w-100 m-1 ${location.pathname === '/quiz-disponibles' ? 'active' : 'text-white'}`}
                        >
                            Quiz disponibles 
                        </Link>
                    </li>
                    <li className='d-flex w-100 navStyle'>
                        <Link
                            to="/mes-quiz"
                            className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center justify-content-center justify-content-lg-start w-100 m-1 ${location.pathname === '/mes-quiz' ? 'active' : 'text-white'}`}
                        >
                            Vos Quiz
                        </Link>
                    </li>
                    {/* <li className='d-flex w-100 navStyle'>
                        <Link
                            to="/mentions-legales"
                            className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center justify-content-center justify-content-lg-start w-100 m-1 ${location.pathname === '/mentions-legales' ? 'active' : 'text-white'}`}
                        >
                            Mentions légales
                        </Link>
                    </li>
                    <li className='d-flex w-100 navStyle'>
                        <Link
                            to="/politique-de-confidentialite"
                            className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center justify-content-center justify-content-lg-start w-100 m-1 ${location.pathname === '/politique-de-confidentialite' ? 'active' : 'text-white'}`}
                        >
                            Politique de confidentialité
                        </Link>
                    </li> */}
                    <li className='d-flex w-100 navStyle'>
                        <Link
                            to="/deconnexion"
                            className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center justify-content-center justify-content-lg-start w-100 m-1 ${location.pathname === '/deconnexion' ? 'active' : 'text-white'}`}
                        >
                            Déconnexion
                        </Link>
                    </li>
                </ul>
                <p className='d-none d-lg-block text-center text-white'>Copyright © 2024 PAQUAM</p>
            </nav>
        </>
    );
}

export default NavList;
