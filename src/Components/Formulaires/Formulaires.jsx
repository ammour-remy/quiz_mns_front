// import React, { useState } from 'react';
// import './formulaires.css';
// import { Link, useNavigate } from 'react-router-dom';
// import axiosInstance from '../../Services/AxiosInstance';

// function Formulaires(props) {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     if (props.title === "Connectez-vous") {
//     //         try {
//     //             const response = await axiosInstance.post('/login_check', {
//     //                 mail: email,
//     //                 password: password,
//     //             });
//     //             const { token } = response.data;
//     //             localStorage.setItem('token', token);
//     //             setError('');
//     //             navigate('/home');
//     //         } catch (error) {
//     //             setError('Invalid email or password');
//     //         }
//     //     }
//     // };


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (props.title === "Connectez-vous") {
//             try {
//                 const response = await axiosInstance.post('/login_check', {
//                     mail: email,
//                     password: password,
//                 });
//                 const { token } = response.data;
//                 localStorage.setItem('token', token);
//                 setError('');
//                 navigate('/home');
//             } catch (error) {
//                 setError('Invalid email or password');
//             }
//         } else if (props.title === "Inscrivez-vous") {
//             if (password !== confirmPassword) {
//                 setError('Les mots de passe ne correspondent pas');
//                 return;
//             }

//             try {
//                 const response = await axiosInstance.post('/api/user', {
//                     first_name: firstName,
//                     last_name: lastName,
//                     email: email,
//                     password: password,
//                     is_admin: false // ou true selon les besoins
//                 });

//                 alert('Utilisateur créé avec succès');
//                 navigate('/');
//             } catch (error) {
//                 setError('Une erreur est survenue lors de la création du compte');
//             }
//         }
//     };
//     return (
//         <section id='formulaire' className='rounded-4'>
//             <article className='p-4'>
//                 <p className='fs-3 fw-semibold text-center m-0'>{props.title}</p>
//             </article>
//             <form onSubmit={handleSubmit} className='p-5 d-flex flex-column position-relative'>
//                 {(props.title === "Connectez-vous" || props.title === "Inscrivez-vous" || props.title === "Mot de passe oublié") && (
//                     <>
//                         <label htmlFor="mail">E-mail</label>
//                         <input
//                             className='mb-4'
//                             type="text"
//                             name="mail"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </>
//                 )}
//                 {(props.title === "Inscrivez-vous") && (
//                     <>
//                         <label htmlFor="lastName">Nom</label>
//                         <input className='mb-4' type="text" name="lastName" />
//                         <label htmlFor="firstName">Prénom</label>
//                         <input className='mb-4' type="text" name="firstName" />
//                     </>
//                 )}
//                 {(props.title === "Connectez-vous" || props.title === "Inscrivez-vous") && (
//                     <>
//                         <label htmlFor="password">Mot de passe</label>
//                         <input
//                             className='mb-4'
//                             type="password"
//                             name="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </>
//                 )}
//                 {props.title === "Réinitialiser le mot de passe" && (
//                     <>
//                         <label htmlFor="newPassword">Nouveau mot de passe</label>
//                         <input className='mb-4' type="text" name="newPassword" />
//                     </>
//                 )}
//                 {(props.title === "Inscrivez-vous" || props.title === "Réinitialiser le mot de passe") && (
//                     <>
//                         <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
//                         <input className='mb-4' type="text" name="confirmPassword" />
//                     </>
//                 )}
//                 {props.title === "Connectez-vous" && (
//                     <>
//                         <Link to="/inscription" className='text-decoration-none text-center text-dark'>
//                             Pas encore de compte ? Inscrivez-vous
//                         </Link>
//                         <Link to="/mot-de-passe-oublie" className='text-decoration-none text-center text-dark'>
//                             Mot de passe oublié ?
//                         </Link>
//                     </>
//                 )}
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <section className='pb-4'></section>
//                 <button className='bgPrimary fw-semibold position-absolute bottom-0 end-0 border-0 p-3 px-4 rounded-3' type="submit">Envoyer</button>
//             </form>
//         </section>
//     );
// }

// export default Formulaires;



import React, { useState } from 'react';
import './formulaires.css';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../Services/AxiosInstance';

function Formulaires(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (props.title === "Connectez-vous") {
            // Logique pour la connexion
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
                setError('Le mail ou mot de passe n\'est pas valide');
            }
        } else if (props.title === "Inscrivez-vous") {
            // Logique pour l'inscription
            if (password !== confirmPassword) {
                setError('Les mots de passe ne correspondent pas');
                return;
            }

            try {
                const response = await axiosInstance.post('/user', {
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password,
                    is_admin: false
                });

                alert('Utilisateur créé avec succès');
                navigate('/');
            } catch (error) {
                // Affichage des détails de l'erreur
                if (error.response) {
                    // Erreur retournée par le serveur
                    setError(`Erreur ${error.response.status}: ${error.response.data.message}`);
                } else if (error.request) {
                    // Requête envoyée mais pas de réponse reçue
                    setError('Aucune réponse du serveur');
                } else {
                    // Autres erreurs (problème de configuration, etc.)
                    setError(`Erreur: ${error.message}`);
                }
            }
        }
    };

    return (
        <section id='formulaire' className='rounded-4'>
            <article className='p-4'>
                <p className='fs-3 fw-semibold text-center m-0'>{props.title}</p>
            </article>
            <form onSubmit={handleSubmit} className='p-5 d-flex flex-column position-relative'>
                {/* Affichage du champ email pour connexion et inscription */}
                {(props.title === "Connectez-vous" || props.title === "Inscrivez-vous" || props.title === "Mot de passe oublié") && (
                    <>
                        <label htmlFor="mail">E-mail</label>
                        <input
                            className='mb-4'
                            type="email"
                            name="mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </>
                )}

                {/* Affichage des champs nom et prénom uniquement pour l'inscription */}
                {props.title === "Inscrivez-vous" && (
                    <>
                        <label htmlFor="LastName">Nom</label>
                        <input
                            className='mb-4'
                            type="text"
                            name="LastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <label htmlFor="FirstName">Prénom</label>
                        <input
                            className='mb-4'
                            type="text"
                            name="FirstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </>
                )}

                {/* Affichage du champ mot de passe pour connexion et inscription */}
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

                {/* Affichage du champ de confirmation de mot de passe uniquement pour l'inscription */}
                {props.title === "Inscrivez-vous" && (
                    <>
                        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                        <input
                            className='mb-4'
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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

                {/* Affichage des liens supplémentaires uniquement pour la connexion */}
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

                {/* Affichage du message d'erreur */}
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <section className='pb-4'></section>
                <button className='bgPrimary fw-semibold position-absolute bottom-0 end-0 border-0 p-3 px-4 rounded-3' type="submit">Envoyer</button>
            </form>
        </section>
    );
}

export default Formulaires;
