import React, { useState, useEffect } from 'react';
import './formulaireCreateQuiz.css';
import axiosInstance from '../../Services/AxiosInstance';

function FormulaireCreateQuiz({ onTitleChange, onQuizSubmit, onQuizUpdate, isQuizSubmitted }) {
    const [title, setTitle] = useState('');
    const [numQuestions, setNumQuestions] = useState(1);
    const [minScore, setMinScore] = useState(1);
    const [teamOption, setTeamOption] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const [initialValues, setInitialValues] = useState({});

    useEffect(() => {
        if (isSubmitted && !isEditing) {
            onTitleChange("Créer votre quiz");
        }
    }, [isSubmitted, isEditing, onTitleChange]);

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
            
            // Stocker les valeurs initiales du quiz après la création, incluant l'ID
            setInitialValues({
                id: response.data.id,
                title: title,
                minScore: minScore,
                teamOption: teamOption,
                numQuestions: numQuestions
            });

            setIsSubmitted(true);
            onQuizSubmit({ numQuestions: numQuestions, quizId: response.data.id }); // Inclure l'ID du quiz
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
        onTitleChange("Modifier votre quiz");
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token is not available');
                return;
            }
    
            const updatedQuizData = {
                title: title,
                min_score: minScore,
                is_team: teamOption,
                accessibility: false,
                number_question: numQuestions
            };
    
            const response = await axiosInstance.put(`/api/quiz/update_quiz/${initialValues.id}`, updatedQuizData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            console.log('Quiz updated successfully:', response.data);
    
            // Assurez-vous que l'objet complet est passé à onQuizUpdate
            onQuizUpdate({
                numQuestions: response.data.numberQuestion,
                title: response.data.title,
                minScore: response.data.minScore,
                isTeam: response.data.isTeam,
                id: response.data.id
            });
    
            setIsEditing(false);
        } catch (error) {
            console.error('Failed to update the quiz:', error);
        }
    };
    

    const handleReturn = () => {
        // Restaurer les valeurs initiales du quiz
        setTitle(initialValues.title);
        setMinScore(initialValues.minScore);
        setTeamOption(initialValues.teamOption);
        setNumQuestions(initialValues.numQuestions);

        setIsEditing(false);
        onTitleChange("Créer votre quiz");
        console.log(initialValues);
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
                                className="btn-primary bg-primary btn fw-semibold position-absolute bottom-0 end-0 buttonCreateQuiz border-0 p-3 px-4"
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
