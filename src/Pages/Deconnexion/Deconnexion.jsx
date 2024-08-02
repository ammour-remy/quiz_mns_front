import React from 'react'
import './deconnexion.css'
import { useNavigate } from 'react-router-dom';

import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import Aside from '../../Components/Aside/Aside'
import Navlist from '../../Components/NavList/NavList'
import TitlePage from '../../Components/TitlePage/TitlePage'


function Deconnexion() {

    const navigate = useNavigate();

    const handleRetourClick = () => {
        navigate(-1);
    };

    const handleLogoutClick = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <main>
            <Aside>
                <Navlist />
            </Aside>
            <Header />
            <Navlist addStyle="position-absolute d-lg-none" />
            <Main>
                <TitlePage title="Déconnexion" />
                <article className='d-flex justify-content-center align-items-center mt-5'>
                    <section id='formulaire' className='rounded-4'>
                        <article className='p-4'>
                            <p className='fs-5 fw-semibold text-center m-0'>Etes-vous sur de vouloir vous déconnecter ?</p>
                        </article>
                        <article className='d-flex justify-content-around my-5 border-0'>
                            <button
                                type="button"
                                onClick={handleLogoutClick}
                                className="btn btn-danger btn-custom-logout buttonCustomLogOut d-flex align-items-center p-2 px-4"
                            >
                                <i className="bi bi-door-closed-fill me-2"></i>
                                Se déconnecter
                            </button>
                            <button
                                type="button"
                                onClick={handleRetourClick}
                                className="btn btn-primary btn-custom-return buttonCustomLogOut p-2 d-flex align-items-center px-4"
                            >
                                <i className="bi bi-arrow-left me-2"></i>
                                Retour
                            </button>
                        </article>
                    </section>
                </article>
            </Main>
        </main>
    )
}

export default Deconnexion
