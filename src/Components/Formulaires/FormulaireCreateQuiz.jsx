import React, { useState } from 'react';
import './formulaireCreateQuiz.css';
import axiosInstance from '../../Services/AxiosInstance';

function FormulaireCreateQuiz() {
    const [title, setTitle] = useState('');
    const [propositions, setPropositions] = useState(3);
    const [numQuestions, setNumQuestions] = useState(1);
    const [minScore, setMinScore] = useState(1);
    const [teamOption, setTeamOption] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleNumQuestionsChange = (event) => {
        let value = parseInt(event.target.value);
        if (value < 1) {
            value = 1;
        } else if (value > 20) {
            value = 20;
        }
        setNumQuestions(value);
        if (minScore > value) {
            setMinScore(value);
        }
    };

    const handleMinScoreChange = (event) => {
        let value = parseInt(event.target.value);
        if (value < 1) {
            value = 1;
        } else if (value > numQuestions) {
            value = numQuestions;
        }
        setMinScore(value);
    };

    const handleTeamOptionChange = (event) => {
        setTeamOption(event.target.checked);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const quizData = {
            title: title,
            min_score: minScore,
            is_team: teamOption,
            accessibility: false,
            number_question: numQuestions
        };

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token is not available');
                return;
            }

            const response = await axiosInstance.post('/api/quiz/add_quiz', quizData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log('Quiz created successfully:', response.data);
            setIsSubmitted(true);
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                console.error('Error status:', error.response.status);
            } else {
                console.error('Error message:', error.message);
            }
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        // Logic for saving the changes if needed
    };

    const handleReturn = () => {
        setIsSubmitted(true);
        setIsEditing(false);
    };

    return (
        <article className='d-flex justify-content-center'>
            <section className='rounded-4 formulaireCreateQuiz'>
                <article className='p-4 w-100'>
                    <p className='fs-3 fw-semibold text-center m-0'>Configuration du Quiz</p>
                </article>
                <form className='p-5 d-flex flex-column position-relative' onSubmit={handleSubmit}>
                    <section className='row pb-3'>
                        <article className='border-0 d-flex flex-column flex-lg-row align-items-lg-center w-100 my-3'>
                            <label htmlFor="quizTitle" className='me-2 mb-2 mb-lg-0 text-nowrap'>Titre du quiz :</label>
                            <input
                                type="text"
                                id="quizTitle"
                                className={`rounded-2 flex-grow-1 w-100 ${isSubmitted && !isEditing ? 'bg-body-secondary' : ''}`}
                                value={title}
                                onChange={handleTitleChange}
                                readOnly={isSubmitted && !isEditing}
                            />
                        </article>
                        <article className='border-0 d-flex align-items-center col-lg-6 my-3'>
                            <label htmlFor="numQuestions">Nombre de questions (de 1 à 20) :</label>
                            <input
                                type="number"
                                id="numQuestions"
                                className={`numberInput rounded-2 ps-3 ms-5 ${isSubmitted && !isEditing ? 'bg-body-secondary' : ''}`}
                                value={numQuestions}
                                onChange={handleNumQuestionsChange}
                                min="1"
                                max="20"
                                readOnly={isSubmitted && !isEditing}
                            />
                        </article>
                        <article className='border-0 d-flex align-items-center col-lg-6 my-3'>
                            <label htmlFor="teamOption" className='me-4'>Possibilité de le passer en équipe :</label>
                            <input
                                type="checkbox"
                                id="teamOption"
                                className={`custom-checkbox ms-5 ${isSubmitted && !isEditing ? 'bg-body-secondary' : ''}`}
                                checked={teamOption}
                                onChange={handleTeamOptionChange}
                                disabled={isSubmitted && !isEditing}
                            />
                        </article>
                        <article className='border-0 d-flex align-items-lg-center w-100 my-3'>
                            <label htmlFor="minScore" className='me-5 mb-2 mb-lg-0'>Score pour réussir le quiz :</label>
                            <input
                                type="number"
                                id="minScore"
                                className={`numberInput rounded-2 ps-3 ms-5 ${isSubmitted && !isEditing ? 'bg-body-secondary' : ''}`}
                                value={minScore}
                                onChange={handleMinScoreChange}
                                min="1"
                                max={numQuestions}
                                readOnly={isSubmitted && !isEditing}
                            />
                        </article>
                        {/* <article className='border-0 d-flex flex-column flex-lg-row align-items-lg-center w-100 my-3'>
                            <label className='me-2 mb-2 mb-lg-0 text-nowrap'>Nombres de propositions par question :</label>
                            <div className='d-flex ps-lg-5'>
                                <button
                                    type="button"
                                    className={`btn px-5 ${propositions === 3 ? 'btn-custom' : 'btn-outline-custom'}`}
                                    onClick={() => setPropositions(3)}
                                    disabled={isSubmitted && !isEditing}
                                >
                                    3
                                </button>
                                <span className='mx-2 pt-2 px-3'>ou</span>
                                <button
                                    type="button"
                                    className={`btn px-5 ${propositions === 4 ? 'btn-custom' : 'btn-outline-custom'}`}
                                    onClick={() => setPropositions(4)}
                                    disabled={isSubmitted && !isEditing}
                                >
                                    4
                                </button>
                            </div>
                        </article> */}
                    </section>
                    {isSubmitted ? (
                        isEditing ? (
                            <div className="d-flex justify-content-end position-absolute bottom-0 end-0">
                                <button
                                    className="btn btn-primary fw-semibold border-0 p-3 px-4"
                                    type="button"
                                    onClick={handleSave}
                                >
                                    Enregistrer
                                </button>
                                <button
                                    className="btn btn-secondary ms-2 fw-semibold buttonCreateQuiz border-0 p-3 px-4"
                                    type="button"
                                    onClick={handleReturn}
                                >
                                    Retour
                                </button>
                            </div>
                        ) : (
                            <button
                                className="btn-primary bg-primary btn fw-semibold position-absolute buttonCreateQuiz bottom-0 end-0 border-0 p-3 px-4"
                                type="button"
                                onClick={handleEdit}
                            >
                                Modifier
                            </button>
                        )
                    ) : (
                        <button
                            className="bgPrimary fw-semibold position-absolute bottom-0 end-0 border-0 buttonCreateQuiz p-3 px-4"
                            type="submit"
                        >
                            Confirmer
                        </button>
                    )}
                </form>
            </section>
        </article>
    );
}

export default FormulaireCreateQuiz;
