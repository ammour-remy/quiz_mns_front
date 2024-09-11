// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Header from '../../Components/Header/Header';
// import Main from '../../Components/Main/Main';
// import Aside from '../../Components/Aside/Aside';
// import Navlist from '../../Components/NavList/NavList';
// import TitlePage from '../../Components/TitlePage/TitlePage';
// import Rule from '../../Components/Rule/Rule';
// import axiosInstance from '../../Services/AxiosInstance';
// import QuizQuestion from '../../Components/Question/QuizQuestion';

// function PlayQuiz() {
//     const { id } = useParams();
//     const [quizData, setQuizData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [startQuiz, setStartQuiz] = useState(false);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [isQuestionValid, setIsQuestionValid] = useState(false);
//     const [userAnswers, setUserAnswers] = useState({}); // Stocke les réponses pour tous les types de questions

//     useEffect(() => {
//         axiosInstance.get(`/quiz/${id}/questions`)
//             .then(response => {
//                 setQuizData(response.data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError('Impossible de charger les questions du quiz.');
//                 setLoading(false);
//             });
//     }, [id]);

//     const handleStartQuiz = () => {
//         setStartQuiz(true);
//     };

//     const handleNextQuestion = () => {
//         setCurrentQuestionIndex(currentQuestionIndex + 1);
//     };

//     const handlePreviousQuestion = () => {
//         setCurrentQuestionIndex(currentQuestionIndex - 1);
//     };

//     const handleSaveUserAnswers = (questionId, answers) => {
//         setUserAnswers((prevAnswers) => ({
//             ...prevAnswers,
//             [questionId]: { id: questionId, answers: answers.map((answerId) => ({ id: answerId })) }, // Format structuré
//         }));
//     };

//     // Méthode pour soumettre les réponses au serveur
//     const handleFinishQuiz = () => {
//         // Envoyer les réponses à l'API
//         axiosInstance.post(`/quiz/${id}/submit`, userAnswers)
//             .then((response) => {
//                 console.log('Réponses soumises avec succès :', response.data);
//                 // Tu peux afficher un message de succès ou rediriger l'utilisateur après la soumission
//             })
//             .catch((error) => {
//                 console.error('Erreur lors de la soumission du quiz :', error);
//             });
//     };

//     if (loading) {
//         return <div>Chargement des questions...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <main className='position-relative'>
//             <Aside>
//                 <Navlist />
//             </Aside>
//             <Header />
//             <Navlist addStyle="position-absolute d-lg-none" />
//             <Main addStyle="position-relative">
//                 <TitlePage title={`Quiz : ${quizData ? quizData.title : ''}`} />

//                 {!startQuiz ? (
//                     <Rule
//                         title={quizData.title}
//                         minScore={quizData.minScore}
//                         numberQuestion={quizData.numberQuestion}
//                         onStart={handleStartQuiz}
//                     />
//                 ) : (
//                     <section className='borderPrimary p-3 rounded-3 mx-3'>
//                         <QuizQuestion
//                             key={quizData.questions[currentQuestionIndex].id}
//                             question={quizData.questions[currentQuestionIndex]}
//                             index={currentQuestionIndex}
//                             onValidate={setIsQuestionValid}
//                             savedAnswers={userAnswers[quizData.questions[currentQuestionIndex].id]?.answers.map(ans => ans.id)} // Sauvegarde les réponses
//                             onSaveAnswers={handleSaveUserAnswers}
//                         />

//                         <article className="d-flex justify-content-between mt-3">
//                             {currentQuestionIndex > 0 && (
//                                 <button onClick={handlePreviousQuestion} className="btn btn-secondary">
//                                     Retour
//                                 </button>
//                             )}

//                             {currentQuestionIndex < quizData.questions.length - 1 ? (
//                                 <div className="d-flex justify-content-end w-100">
//                                     <button
//                                         onClick={handleNextQuestion}
//                                         className="bgPrimary borderPrimary p-2 px-3 rounded-3 buttonPlay"
//                                         disabled={!isQuestionValid}
//                                     >
//                                         Suivant
//                                     </button>
//                                 </div>
//                             ) : (
//                                 <button
//                                     onClick={handleFinishQuiz}
//                                     className="bgPrimary borderPrimary p-2 px-3 rounded-3 buttonPlay"
//                                     disabled={!isQuestionValid}
//                                 >
//                                     Terminer
//                                 </button>
//                             )}
//                         </article>
//                     </section>
//                 )}
//             </Main>
//         </main>
//     );
// }

// export default PlayQuiz;


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Ajoute useNavigate pour la redirection
import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';
import Aside from '../../Components/Aside/Aside';
import Navlist from '../../Components/NavList/NavList';
import TitlePage from '../../Components/TitlePage/TitlePage';
import Rule from '../../Components/Rule/Rule';
import axiosInstance from '../../Services/AxiosInstance';
import QuizQuestion from '../../Components/Question/QuizQuestion';

function PlayQuiz() {
    const { id } = useParams();
    const navigate = useNavigate(); // Pour la redirection
    const [quizData, setQuizData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [startQuiz, setStartQuiz] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isQuestionValid, setIsQuestionValid] = useState(false);
    const [userAnswers, setUserAnswers] = useState({}); // Stocke les réponses pour tous les types de questions

    useEffect(() => {
        axiosInstance.get(`/quiz/${id}/questions`)
            .then(response => {
                setQuizData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Impossible de charger les questions du quiz.');
                setLoading(false);
            });
    }, [id]);

    const handleStartQuiz = () => {
        setStartQuiz(true);
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    const handleSaveUserAnswers = (questionId, answers) => {
        setUserAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: { id: questionId, answers: answers.map((answerId) => ({ id: answerId })) }, // Format structuré
        }));
    };

    // Méthode pour soumettre les réponses au serveur
    const handleFinishQuiz = () => {
        axiosInstance.post(`/quiz/${id}/submit`, userAnswers)
            .then((response) => {
                const { score, isSuccess } = response.data;
                // Afficher l'alerte avec le score et le statut
                const message = isSuccess
                    ? `Félicitations ! Vous avez réussi avec un score de ${score}.`
                    : `Vous avez échoué avec un score de ${score}.`;

                if (window.confirm(message + " Voulez-vous retourner à vos quiz ?")) {
                    navigate('/mes-quiz'); // Redirection vers /mes-quiz après confirmation
                }
            })
            .catch((error) => {
                console.error('Erreur lors de la soumission du quiz :', error);
            });
    };

    if (loading) {
        return <div>Chargement des questions...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <main className='position-relative'>
            <Aside>
                <Navlist />
            </Aside>
            <Header />
            <Navlist addStyle="position-absolute d-lg-none" />
            <Main addStyle="position-relative">
                <TitlePage title={`Quiz : ${quizData ? quizData.title : ''}`} />

                {!startQuiz ? (
                    <Rule
                        title={quizData.title}
                        minScore={quizData.minScore}
                        numberQuestion={quizData.numberQuestion}
                        onStart={handleStartQuiz}
                    />
                ) : (
                    <section className='borderPrimary p-3 rounded-3 mx-3'>
                        <QuizQuestion
                            key={quizData.questions[currentQuestionIndex].id}
                            question={quizData.questions[currentQuestionIndex]}
                            index={currentQuestionIndex}
                            onValidate={setIsQuestionValid}
                            savedAnswers={userAnswers[quizData.questions[currentQuestionIndex].id]?.answers.map(ans => ans.id)} // Sauvegarde les réponses
                            onSaveAnswers={handleSaveUserAnswers}
                        />

                        <article className="d-flex justify-content-between mt-3">
                            {currentQuestionIndex > 0 && (
                                <button onClick={handlePreviousQuestion} className="btn btn-secondary">
                                    Retour
                                </button>
                            )}

                            {currentQuestionIndex < quizData.questions.length - 1 ? (
                                <div className="d-flex justify-content-end w-100">
                                    <button
                                        onClick={handleNextQuestion}
                                        className="bgPrimary borderPrimary p-2 px-3 rounded-3 buttonPlay"
                                        disabled={!isQuestionValid}
                                    >
                                        Suivant
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={handleFinishQuiz}
                                    className="bgPrimary borderPrimary p-2 px-3 rounded-3 buttonPlay"
                                    disabled={!isQuestionValid}
                                >
                                    Terminer
                                </button>
                            )}
                        </article>
                    </section>
                )}
            </Main>
        </main>
    );
}

export default PlayQuiz;
