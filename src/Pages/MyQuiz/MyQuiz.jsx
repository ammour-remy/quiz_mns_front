import React from 'react'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import Aside from '../../Components/Aside/Aside'
import Navlist from '../../Components/NavList/NavList'
import "./myQuiz.css"
import MyQuizList from '../../assets/json/vosQuiz.json'
import QuizList from '../../Components/QuizList/QuizList'
import CreateButton from '../../Components/CreateButton/CreateButton'

function MyQuiz() {
    return (
        <main className='position-relative'>
            <Aside>
                <Navlist />
            </Aside>
            <Header />
            <Navlist addStyle="position-absolute d-lg-none" />
            <Main addStyle="position-relative">
                <CreateButton title="quiz" />
                <QuizList data={MyQuizList} />
            </Main>
        </main>
    )
}

export default MyQuiz