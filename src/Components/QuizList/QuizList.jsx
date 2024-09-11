// import React, { useEffect, useState } from 'react';
// import './quizList.css';
// import TitlePage from '../TitlePage/TitlePage';
// import axiosInstance from '../../Services/AxiosInstance';

// function QuizList(props) {
//     const [quizzes, setQuizzes] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         axiosInstance.get('/quizzes-with-scores')
//             .then((response) => {
//                 setQuizzes(response.data.reverse());
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 setError('Une erreur s\'est produite lors du chargement des quizzes');
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return <article className='colorPrimary fw-bold '>Chargement des quiz en cours...</article>;
//     }

//     if (error) {
//         return <article>{error}</article>;
//     }

//     return (
//         <article>
//             <TitlePage title={props.title} />
//             <section>
//                 <ul className='px-3 d-flex flex-column align-items-center list-unstyled'>
//                     <li className='fw-semibold row w-100 underlineCustomList'>
//                         <article className='col-3 col-md-3'>
//                             <p>Titre du quiz</p>
//                         </article>
//                         <article className='col-3 p-0 col-md-2 text-md-center'>
//                             <p>Date de création</p>
//                         </article>
//                         <article className='col-3 p-0 ps-md-2 col-md-1'>
//                             <p>Statut</p>
//                         </article>
//                         <article className='col-3 col-md-1 text-md-center'>
//                             <p>Réussi</p>
//                         </article>
//                         <article className='col-3 col-md-1'>
//                             <p>Score</p>
//                         </article>
//                         {props.title === "Quiz disponibles" && (
//                             <>
//                                 <article className='col-3 col-md-1'>
//                                     <p>Essais</p>
//                                 </article>
//                                 <article className='col-3 col-md-1'>
//                                     <p>Équipe</p>
//                                 </article>
//                             </>
//                         )}
//                         {props.title === "Vos Quiz" && (
//                             <>
//                                 <article className='col-3 col-md-1 px-0 text-md-center'>
//                                     <p>Modifier</p>
//                                 </article>
//                                 <article className='col-3 col-md-1 px-0 text-md-center'>
//                                     <p>Supprimer</p>
//                                 </article>
//                             </>
//                         )}
//                         <article className='col-3 col-md-2 text-md-center'>
//                             <p>Commencer</p>
//                         </article>
//                     </li>

//                     {quizzes.map((quiz, index) => (
//                         <li key={index} className='fw-semibold w-100 row underlineCustomList'>
//                             <article className='my-auto col-3 col-md-3'>
//                                 <p>{quiz.title}</p>
//                             </article>
//                             <article className='my-auto col-3 col-md-2 text-md-center'>
//                                 <p>{new Date(quiz.createDate).toLocaleDateString()}</p>
//                             </article>
//                             <article className='my-auto col-3 col-md-1'>
//                                 <p>{quiz.isAccessibility ? 'Accessible' : 'Non accessible'}</p>
//                             </article>
//                             <article className='my-auto col-3 col-md-1 text-md-center fs-4'>
//                                 <p className={quiz.usedQuizzes.length > 0 && quiz.usedQuizzes[0].isSuccess ? 'text-success' : 'text-danger'}>
//                                     <i className={`bi fs-3 ${quiz.usedQuizzes.length > 0 && quiz.usedQuizzes[0].isSuccess ? 'bi-check-circle-fill' : 'bi-x-circle-fill'}`}></i>
//                                 </p>
//                             </article>
//                             <article className='my-auto col-3 text-md-start ps-md-4 col-md-1'>
//                                 <p>{quiz.usedQuizzes.length > 0 ? quiz.usedQuizzes[0].score : '-'}</p>
//                             </article>
//                             {props.title === "Quiz disponibles" && (
//                                 <>
//                                     <article className='my-auto col-3 col-md-1'>
//                                         <p>{quiz.usedQuizzes.length > 0 ? quiz.usedQuizzes[0].result : '-'}</p>
//                                     </article>
//                                     <article className='my-auto col-3 col-md-1'>
//                                         <p>{quiz.isTeam ? 'Équipe' : 'Solo'}</p>
//                                     </article>
//                                 </>
//                             )}
//                             {props.title === "Vos Quiz" && (
//                                 <>
//                                     <article className='my-auto col-3 col-md-1 text-md-center'>
//                                         <p><i className="bi bi-pencil-square text-primary fs-3"></i></p>
//                                     </article>
//                                     <article className='my-auto col-3 col-md-1 text-md-center'>
//                                         <p><i className="bi bi-trash text-danger fs-3"></i></p>
//                                     </article>
//                                 </>
//                             )}
//                             <article className='my-auto col-3 col-md-2 text-md-center'>
//                                 <p>
//                                     <i className="bi bi-play-fill text-success fs-3"></i>
//                                 </p>
//                             </article>
//                         </li>
//                     ))}
//                 </ul>
//             </section>
//         </article>
//     );
// }

// export default QuizList;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './quizList.css';
import TitlePage from '../TitlePage/TitlePage';
import axiosInstance from '../../Services/AxiosInstance';

function QuizList(props) {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.get('/quizzes-with-scores')
            .then((response) => {
                setQuizzes(response.data.reverse());
                setLoading(false);
            })
            .catch((error) => {
                setError('Une erreur s\'est produite lors du chargement des quizzes');
                setLoading(false);
            });
    }, []);

    const handlePlayClick = (quizId) => {
        console.log(`ID du quiz sélectionné : ${quizId}`);
        navigate(`/quiz/joue/${quizId}`);
    };

    if (loading) {
        return <div className='colorPrimary fw-bold'>Chargement des quiz en cours...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <article>
            <TitlePage title={props.title} />
            <section>
                <ul className='px-3 d-flex flex-column align-items-center list-unstyled'>
                    <li className='fw-semibold row w-100 underlineCustomList'>
                        <article className='col-3 col-md-3'>
                            <p>Titre du quiz</p>
                        </article>
                        <article className='col-3 p-0 col-md-2 text-md-center'>
                            <p>Date de création</p>
                        </article>
                        <article className='col-3 p-0 ps-md-2 col-md-1'>
                            <p>Statut</p>
                        </article>
                        <article className='col-3 col-md-1 text-md-center'>
                            <p>Réussi</p>
                        </article>
                        <article className='col-3 col-md-1'>
                            <p>Score</p>
                        </article>
                        {props.title === "Quiz disponibles" && (
                            <>
                                <article className='col-3 col-md-1'>
                                    <p>Essais</p>
                                </article>
                                <article className='col-3 col-md-1'>
                                    <p>Équipe</p>
                                </article>
                            </>
                        )}
                        {props.title === "Vos Quiz" && (
                            <>
                                <article className='col-3 col-md-1 px-0 text-md-center'>
                                    <p>Modifier</p>
                                </article>
                                <article className='col-3 col-md-1 px-0 text-md-center'>
                                    <p>Supprimer</p>
                                </article>
                            </>
                        )}
                        <article className='col-3 col-md-2 text-md-center'>
                            <p>Commencer</p>
                        </article>
                    </li>

                    {quizzes.map((quiz, index) => (
                        <li key={index} className='fw-semibold w-100 row underlineCustomList'>
                            <article className='my-auto col-3 col-md-3'>
                                <p>{quiz.title}</p>
                            </article>
                            <article className='my-auto col-3 col-md-2 text-md-center'>
                                <p>{new Date(quiz.createDate).toLocaleDateString()}</p>
                            </article>
                            <article className='my-auto col-3 col-md-1'>
                                <p>{quiz.isAccessibility ? 'Accessible' : 'Non accessible'}</p>
                            </article>
                            <article className='my-auto col-3 col-md-1 text-md-center fs-4'>
                                <p className={quiz.usedQuizzes.length > 0 && quiz.usedQuizzes[0].isSuccess ? 'text-success' : 'text-danger'}>
                                    <i className={`bi fs-3 ${quiz.usedQuizzes.length > 0 && quiz.usedQuizzes[0].isSuccess ? 'bi-check-circle-fill' : 'bi-x-circle-fill'}`}></i>
                                </p>
                            </article>
                            <article className='my-auto col-3 text-md-start ps-md-4 col-md-1'>
                                <p>{quiz.usedQuizzes.length > 0 ? quiz.usedQuizzes[0].result : '-'}</p>
                            </article>
                            {props.title === "Quiz disponibles" && (
                                <>
                                    <article className='my-auto col-3 col-md-1'>
                                        <p>{quiz.usedQuizzes.length > 0 ? quiz.usedQuizzes[0].result : '-'}</p>
                                    </article>
                                    <article className='my-auto col-3 col-md-1'>
                                        <p>{quiz.isTeam ? 'Équipe' : 'Solo'}</p>
                                    </article>
                                </>
                            )}
                            {props.title === "Vos Quiz" && (
                                <>
                                    <article className='my-auto col-3 col-md-1 text-md-center'>
                                        <p><i className="bi bi-pencil-square text-primary fs-3"></i></p>
                                    </article>
                                    <article className='my-auto col-3 col-md-1 text-md-center'>
                                        <p><i className="bi bi-trash text-danger fs-3"></i></p>
                                    </article>
                                </>
                            )}
                            <article className='my-auto col-3 col-md-2 text-md-center'>
                                <p>
                                    <i 
                                        className="bi bi-play-fill text-success fs-3" 
                                        onClick={() => handlePlayClick(quiz.id)}
                                        style={{ cursor: 'pointer' }} 
                                    ></i>
                                </p>
                            </article>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
}

export default QuizList;
