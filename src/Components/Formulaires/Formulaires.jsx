import React from 'react'
import './formulaires.css'
import { Link } from 'react-router-dom';

function Formulaires(props) {
    return (
        <section id='formulaire' className='rounded-4'>
            <article className='p-4'>
                <p className='fs-3 fw-semibold text-center m-0'>{props.title}</p>
            </article>
            <form action='post' className='p-5 d-flex flex-column position-relative'>
                {(props.title === "Connectez-vous" || props.title === "Inscrivez-vous" || props.title === "Mot de passe oublié" ) && (
                    <>
                        <label htmlFor="mail">E-mail</label>
                        <input className='mb-4' type="text" name="mail" />
                    </>
                )}
                {(props.title === "Connectez-vous" || props.title === "Inscrivez-vous") && (
                    <>
                        <label htmlFor="password">Mot de passe</label>
                        <input className='mb-4' type="text" name="password" />
                    </>
                )}
                {props.title === "Réinitialiser le mot de passe" && (
                    <>
                        <label htmlFor="newPassword">Nouveau mot de passe</label>
                        <input className='mb-4' type="text" name="newPassword" />
                    </>
                )}
                {(props.title === "Inscrivez-vous" || props.title === "Réinitialiser le mot de passe") && (
                    <>
                        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                        <input className='mb-4' type="text" name="confirmPassword" />
                    </>
                )}
                {props.title === "Connectez-vous" && (
                    <>
                        <Link to="/inscription" className='text-decoration-none text-center text-dark'>
                            Pas encore de compte ? Inscrivez-vous
                        </Link>
                        <Link to="/mot-de-passe-oublie" className='text-decoration-none text-center text-dark'>
                            Mot de passe oublié ?
                        </Link>
                    </>
                )}
                <section className='pb-4'></section>
                <button className='bgPrimary fw-semibold position-absolute bottom-0 end-0 border-0 p-3 px-4 rounded-3' type="submit">Envoyer</button>
            </form>
        </section>
    )
}

export default Formulaires