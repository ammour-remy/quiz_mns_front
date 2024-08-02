import React, { useState } from 'react';
import './formulaires.css';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../Services/AxiosInstance';

function Formulaires(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (props.title === "Connectez-vous") {
            try {
                const response = await axiosInstance.post('/login_check', {
                    mail: email,
                    password: password,
                });
                const { token } = response.data;
                localStorage.setItem('token', token);
                setError('');
                navigate('/home');
            } catch (error) {
                setError('Invalid email or password');
            }
        }
    };

    return (
        <section id='formulaire' className='rounded-4'>
            <article className='p-4'>
                <p className='fs-3 fw-semibold text-center m-0'>{props.title}</p>
            </article>
            <form onSubmit={handleSubmit} className='p-5 d-flex flex-column position-relative'>
                {(props.title === "Connectez-vous" || props.title === "Inscrivez-vous" || props.title === "Mot de passe oublié") && (
                    <>
                        <label htmlFor="mail">E-mail</label>
                        <input
                            className='mb-4'
                            type="text"
                            name="mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </>
                )}
                {(props.title === "Connectez-vous" || props.title === "Inscrivez-vous") && (
                    <>
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            className='mb-4'
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
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
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <section className='pb-4'></section>
                <button className='bgPrimary fw-semibold position-absolute bottom-0 end-0 border-0 p-3 px-4 rounded-3' type="submit">Envoyer</button>
            </form>
        </section>
    );
}

export default Formulaires;
