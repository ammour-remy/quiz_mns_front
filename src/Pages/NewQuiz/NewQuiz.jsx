import React, { useState, useEffect } from 'react';
import './newQuiz.css';

import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';
import Aside from '../../Components/Aside/Aside';
import Navlist from '../../Components/NavList/NavList';
import TitlePage from '../../Components/TitlePage/TitlePage';
import FormulaireCreateQuiz from '../../Components/Formulaires/FormulaireCreateQuiz';
import FormulaireCreateQuestionsAndAnswers from '../../Components/Formulaires/FormulaireCreateQuestionsAndAnswers';

function NewQuiz() {
    const [title, setTitle] = useState("Créer votre quiz");
    const [numQuestions, setNumQuestions] = useState(1);
    const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
    const [quizId, setQuizId] = useState(null);

    const handleTitleChange = (newTitle) => {
        setTitle(newTitle);
    };

    const handleQuizSubmit = (data) => {
        setNumQuestions(data.numQuestions);
        setIsQuizSubmitted(true);
        setQuizId(data.quizId);
    };

    const handleQuizUpdate = (data) => {
        setNumQuestions(data.numQuestions);
        setQuizId(data.id);
    };

    useEffect(() => {
    }, [numQuestions]);

    return (
        <main>
            <Aside>
                <Navlist />
            </Aside>
            <Header />
            <Navlist addStyle="position-absolute d-lg-none" />
            <Main>
                <TitlePage title={title} />
                <FormulaireCreateQuiz 
                    onTitleChange={handleTitleChange} 
                    onQuizSubmit={handleQuizSubmit} 
                    onQuizUpdate={handleQuizUpdate}
                    isQuizSubmitted={isQuizSubmitted}
                />
                {isQuizSubmitted && <FormulaireCreateQuestionsAndAnswers numQuestions={numQuestions} quizId={quizId} />}
            </Main>
        </main>
    );
}

export default NewQuiz;
