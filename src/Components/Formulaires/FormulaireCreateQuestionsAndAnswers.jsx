import React, { useState, useEffect } from 'react';
import './formulaireCreateQuestionsAndAnswers.css';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../Services/AxiosInstance';

function FormulaireCreateQuestionsAndAnswers({ numQuestions, quizId }) {
    const [questions, setQuestions] = useState(
        Array.from({ length: numQuestions }, () => ({
            type: 1, // Par défaut, 1 Choix
            propositions: Array.from({ length: 3 }, () => ({ text: '', isTrue: false, relatedTo: '' }))
        }))
    );

    const navigate = useNavigate();

    // Utilisez useEffect pour mettre à jour les questions lorsque numQuestions change
    useEffect(() => {
        setQuestions(
            Array.from({ length: numQuestions }, () => ({
                type: 1,
                propositions: Array.from({ length: 3 }, () => ({ text: '', isTrue: false, relatedTo: '' }))
            }))
        );
    }, [numQuestions]);

    const handleTypeChange = (questionIndex, newType) => {
        setQuestions(prevQuestions => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[questionIndex].type = newType;

            if (newType !== 2) { // Pour tous les types sauf X Choix
                updatedQuestions[questionIndex].propositions = updatedQuestions[questionIndex].propositions.map((prop, index) => ({
                    ...prop,
                    isTrue: index === 0 // Seule la première proposition est marquée comme vraie par défaut
                }));
            } else {
                // Réinitialiser toutes les propositions pour X Choix
                updatedQuestions[questionIndex].propositions = updatedQuestions[questionIndex].propositions.map(prop => ({
                    ...prop,
                    isTrue: false
                }));
            }

            return updatedQuestions;
        });
    };

    const handlePropositionChange = (questionIndex, propositionIndex, newText) => {
        setQuestions(prevQuestions => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[questionIndex].propositions[propositionIndex].text = newText;
            return updatedQuestions;
        });
    };

    // Méthode pour gérer les types "1 Choix" et "Blind Test" où une seule réponse peut être vraie
    const handleIsTrueChangeSingleChoice = (questionIndex, propositionIndex) => {
        setQuestions(prevQuestions => {
            const updatedQuestions = prevQuestions.map((question, qIndex) => {
                if (qIndex === questionIndex) {
                    const updatedPropositions = question.propositions.map((prop, pIndex) => ({
                        ...prop,
                        isTrue: pIndex === propositionIndex // Une seule réponse peut être vraie
                    }));
                    return { ...question, propositions: updatedPropositions };
                }
                return question;
            });
            return updatedQuestions;
        });
    };

    // Méthode pour gérer le type "X Choix" où plusieurs réponses peuvent être vraies
    const handleIsTrueChangeMultipleChoice = (questionIndex, propositionIndex) => {
        setQuestions(prevQuestions => {
            const updatedQuestions = prevQuestions.map((question, qIndex) => {
                if (qIndex === questionIndex) {
                    const updatedPropositions = question.propositions.map((prop, pIndex) => {
                        if (pIndex === propositionIndex) {
                            return { ...prop, isTrue: !prop.isTrue };
                        }
                        return prop;
                    });
                    return { ...question, propositions: updatedPropositions };
                }
                return question;
            });
            return updatedQuestions;
        });
    };

    const handleSetPropositions = (questionIndex, number) => {
        setQuestions(prevQuestions => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[questionIndex].propositions = Array.from({ length: number }, (_, i) => ({
                text: updatedQuestions[questionIndex].propositions[i]?.text || '',
                isTrue: updatedQuestions[questionIndex].type === 2 ? false : i === 0, // Réinitialiser isTrue selon le type
                relatedTo: updatedQuestions[questionIndex].propositions[i]?.relatedTo || ''
            }));
            return updatedQuestions;
        });
    };

    const handleRelatedToChange = (questionIndex, propositionIndex, newText) => {
        setQuestions(prevQuestions => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[questionIndex].propositions[propositionIndex].relatedTo = newText;
            return updatedQuestions;
        });
    };

    const handleFormQuestionSubmit = async (e) => {
        e.preventDefault();

        const formattedQuestions = questions.map((question, questionIndex) => {
            const questionName = document.getElementById(`quizQuestionTitle-${questionIndex}`).value;

            const formattedQuestion = {
                type: question.type,
                name: questionName,
                number: question.propositions.length,
                answers: []
            };

            if (question.type === 1 || question.type === 2 || question.type === 3) {
                formattedQuestion.answers = question.propositions.map((prop, propositionIndex) => ({
                    name: prop.text,
                    is_correct: prop.isTrue,
                    order: 0
                }));
            } else if (question.type === 4) {
                formattedQuestion.answers = question.propositions.map((prop, propositionIndex) => ({
                    name: prop.text,
                    is_correct: true,
                    order: propositionIndex + 1
                }));
            } else if (question.type === 5) {
                formattedQuestion.answers = question.propositions.flatMap((prop, propositionIndex) => [
                    {
                        name: prop.text,
                        is_correct: true,
                        order: propositionIndex + 1
                    },
                    {
                        name: prop.relatedTo,
                        is_correct: false,
                        order: propositionIndex + 1
                    }
                ]);
            }

            return formattedQuestion;
        });

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token is not available');
                return;
            }

            const response = await axiosInstance.post(`/api/quiz/add_question_and_answers/${quizId}`, formattedQuestions, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert('Le quiz a été créé avec succès !');
            navigate('/mes-quiz');

            console.log('Questions and answers added successfully:', response.data);
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                console.error('Error status:', error.response.status);
            } else {
                console.error('Error message:', error.message);
            }
        }
    };


    return (
        <form action="" className='my-5' onSubmit={handleFormQuestionSubmit}>
            <article className='d-flex flex-column align-items-center'>
                {questions.map((question, questionIndex) => (
                    <section key={questionIndex} className='rounded-4 formulaireCreateQuiz mt-5'>
                        <article className='p-4 w-100'>
                            <p className='fs-3 fw-semibold m-0'>Question {questionIndex + 1}</p>
                        </article>
                        <article className='border-0 p-5 py-4 d-flex flex-column position-relative'>
                            <section className='row pb-3'>
                                <article className='border-0 d-flex flex-column flex-lg-row align-items-lg-center w-100 my-3'>
                                    <label htmlFor={`quizQuestionTitle-${questionIndex}`} className='me-2 mb-2 mb-lg-0 text-nowrap'>Soumettre la question {questionIndex + 1} :</label>
                                    <input
                                        type="text"
                                        id={`quizQuestionTitle-${questionIndex}`}
                                        className={`rounded-2 flex-grow-1 w-100 `}
                                    />
                                </article>
                                <article className='border-0 d-flex flex-column flex-lg-row align-items-lg-center w-100 my-3'>
                                    <label className='me-2 mb-2 mb-lg-0 text-nowrap'>Type de la question :</label>
                                    <div className='d-flex justify-content-around flex-wrap w-100 ps-lg-5'>
                                        <button
                                            type="button"
                                            className={`btn px-3 text-nowrap mt-2 mt-sm-0 ${question.type === 1 ? 'btn-custom' : 'btn-outline-custom'}`}
                                            onClick={() => handleTypeChange(questionIndex, 1)}
                                        >
                                            1 Choix
                                        </button>
                                        <button
                                            type="button"
                                            className={`btn px-3 text-nowrap mt-2 mt-sm-0 ${question.type === 2 ? 'btn-custom' : 'btn-outline-custom'}`}
                                            onClick={() => handleTypeChange(questionIndex, 2)}
                                        >
                                            X Choix
                                        </button>
                                        <button
                                            type="button"
                                            className={`btn px-3 text-nowrap mt-2 mt-sm-0 ${question.type === 3 ? 'btn-custom' : 'btn-outline-custom'}`}
                                            onClick={() => handleTypeChange(questionIndex, 3)}
                                        >
                                            Blind Test
                                        </button>
                                        <button
                                            type="button"
                                            className={`btn px-3 text-nowrap mt-2 mt-sm-0 ${question.type === 4 ? 'btn-custom' : 'btn-outline-custom'}`}
                                            onClick={() => handleTypeChange(questionIndex, 4)}
                                        >
                                            Ordre
                                        </button>
                                        <button
                                            type="button"
                                            className={`btn px-3 text-nowrap mt-2 mt-sm-0 ${question.type === 5 ? 'btn-custom' : 'btn-outline-custom'}`}
                                            onClick={() => handleTypeChange(questionIndex, 5)}
                                        >
                                            Relier
                                        </button>
                                    </div>
                                </article>
                                <article className='border-0 d-flex flex-column flex-lg-row align-items-lg-center w-100 my-3'>
                                    <label className='me-2 mb-2 mb-lg-0 text-sm-nowrap'>Nombres de propositions par question :</label>
                                    <div className='d-flex flex-wrap ps-lg-5'>
                                        <button
                                            type="button"
                                            className={`btn px-5 ${question.propositions.length === 3 ? 'btn-custom' : 'btn-outline-custom'}`}
                                            onClick={() => handleSetPropositions(questionIndex, 3)}
                                        >
                                            3
                                        </button>
                                        <span className='mx-2 pt-2 px-3'>ou</span>
                                        <button
                                            type="button"
                                            className={`btn px-5 ${question.propositions.length === 4 ? 'btn-custom' : 'btn-outline-custom'}`}
                                            onClick={() => handleSetPropositions(questionIndex, 4)}
                                        >
                                            4
                                        </button>
                                    </div>
                                </article>
                                {(question.type === 1 || question.type === 3) && (
                                    <>
                                        {question.propositions.map((prop, propositionIndex) => (
                                            <article key={propositionIndex} className='border-0 d-flex flex-column flex-lg-row align-items-lg-center w-100 my-3'>
                                                <label htmlFor={`proposition-${questionIndex}-${propositionIndex}`} className='me-2 mb-2 mb-lg-0 text-nowrap'>{`Proposition ${propositionIndex + 1} :`}</label>
                                                <div className='d-flex ps-lg-5 flex-grow-1'>
                                                    <input
                                                        type="text"
                                                        id={`proposition-${questionIndex}-${propositionIndex}`}
                                                        className='rounded-2 flex-grow-1 w-100'
                                                        value={prop.text}
                                                        onChange={(e) => handlePropositionChange(questionIndex, propositionIndex, e.target.value)}
                                                    />
                                                    <button
                                                        type="button"
                                                        className={`btn ms-3 px-5 py-1 ${prop.isTrue ? 'btn-custom' : 'btn-outline-custom'}`}
                                                        onClick={() => handleIsTrueChangeSingleChoice(questionIndex, propositionIndex)}
                                                    >
                                                        {prop.isTrue ? 'Vrai' : 'Faux'}
                                                    </button>
                                                </div>
                                            </article>
                                        ))}
                                    </>
                                )}
                                {question.type === 2 && (
                                    <>
                                        {question.propositions.map((prop, propositionIndex) => (
                                            <article key={propositionIndex} className='border-0 d-flex flex-column flex-lg-row align-items-lg-center w-100 my-3'>
                                                <label htmlFor={`proposition-${questionIndex}-${propositionIndex}`} className='me-2 mb-2 mb-lg-0 text-nowrap'>{`Proposition ${propositionIndex + 1} :`}</label>
                                                <div className='d-flex ps-lg-5 flex-grow-1'>
                                                    <input
                                                        type="text"
                                                        id={`proposition-${questionIndex}-${propositionIndex}`}
                                                        className='rounded-2 flex-grow-1 w-100'
                                                        value={prop.text}
                                                        onChange={(e) => handlePropositionChange(questionIndex, propositionIndex, e.target.value)}
                                                    />
                                                    <button
                                                        type="button"
                                                        className={`btn ms-3 px-5 py-1 ${prop.isTrue ? 'btn-custom' : 'btn-outline-custom'}`}
                                                        onClick={() => handleIsTrueChangeMultipleChoice(questionIndex, propositionIndex)}
                                                    >
                                                        {prop.isTrue ? 'Vrai' : 'Faux'}
                                                    </button>
                                                </div>
                                            </article>
                                        ))}
                                    </>
                                )}
                                {question.type === 4 && (
                                    <>
                                        <p className='colorPrimary fw-bold text-end'>Renseigner dans l'ordre indiqué !</p>
                                        {question.propositions.map((prop, propositionIndex) => (
                                            <article key={propositionIndex} className='border-0 d-flex flex-column flex-lg-row align-items-lg-center w-100 my-3'>
                                                <label htmlFor={`proposition-${questionIndex}-${propositionIndex}`} className='me-2 mb-2 mb-lg-0 text-nowrap'>{`Proposition ${propositionIndex + 1} :`}</label>
                                                <div className='d-flex ps-lg-5 flex-grow-1'>
                                                    <input
                                                        type="text"
                                                        id={`proposition-${questionIndex}-${propositionIndex}`}
                                                        className='rounded-2 flex-grow-1 w-100'
                                                        value={prop.text}
                                                        onChange={(e) => handlePropositionChange(questionIndex, propositionIndex, e.target.value)}
                                                    />
                                                    <button
                                                        type="button"
                                                        className='btn ms-3 px-4 fw-bold py-1 btn-outline-custom'
                                                        disabled
                                                    >
                                                        {propositionIndex + 1}
                                                    </button>
                                                </div>
                                            </article>
                                        ))}
                                    </>
                                )}
                                {question.type === 5 && (
                                    <>
                                        <p className='colorPrimary fw-bold text-end'>Renseigner les propositions à relier !</p>
                                        {question.propositions.map((prop, propositionIndex) => (
                                            <article key={propositionIndex} className='border-0 d-flex flex-column flex-lg-row align-items-lg-center w-100 my-3'>
                                                <label htmlFor={`proposition-${questionIndex}-${propositionIndex}`} className='me-2 mb-2 mb-lg-0 text-nowrap'>{`Proposition ${propositionIndex + 1} :`}</label>
                                                <div className='d-flex ps-lg-5 flex-grow-1'>
                                                    <input
                                                        type="text"
                                                        id={`proposition-${questionIndex}-${propositionIndex}`}
                                                        className='rounded-2 flex-grow-1 w-100'
                                                        value={prop.text}
                                                        onChange={(e) => handlePropositionChange(questionIndex, propositionIndex, e.target.value)}
                                                    />
                                                    <input
                                                        type="text"
                                                        id={`related-${questionIndex}-${propositionIndex}`}
                                                        className='rounded-2 ms-3 flex-grow-1 w-100'
                                                        value={prop.relatedTo}
                                                        onChange={(e) => handleRelatedToChange(questionIndex, propositionIndex, e.target.value)}
                                                    />
                                                </div>
                                            </article>
                                        ))}
                                    </>
                                )}
                            </section>
                        </article>
                    </section>
                ))}
            </article>
            <article className="d-flex justify-content-end mt-5 me-5">
                <button
                    type="submit"
                    className="btn btn-custom me-3 p-3 px-4"
                >
                    Enregistrer
                </button>
            </article>
        </form>
    );
}

export default FormulaireCreateQuestionsAndAnswers;
