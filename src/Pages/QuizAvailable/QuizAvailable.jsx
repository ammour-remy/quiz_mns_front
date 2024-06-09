import React from 'react'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import Aside from '../../Components/Aside/Aside'
import Navlist from '../../Components/NavList/NavList'
import "./quizAvailable.css"
import QuizAvailableList from '../../assets/json/quizDisponible.json'
import QuizList from '../../Components/QuizList/QuizList'

function QuizAvailable() {
    return (
        <main className='position-relative'>
            <Aside>
                <Navlist />
            </Aside>
            <Header />
            <Navlist addStyle="position-absolute d-lg-none" />
            <Main>
                <QuizList data={QuizAvailableList} />
            </Main>
        </main>
    )
}

export default QuizAvailable