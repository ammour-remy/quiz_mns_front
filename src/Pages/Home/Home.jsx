import React from 'react'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import Aside from '../../Components/Aside/Aside'
import Navlist from '../../Components/NavList/NavList'
import "./home.css"
import TitlePage from '../../Components/TitlePage/TitlePage'
import MiniQuizList from '../../Components/MiniQuizList/MiniQuizList'
import QuizAvailableList from '../../assets/json/quizDisponible.json'
import VosQuiz from '../../assets/json/vosQuiz.json'
import NouveauxQuiz from '../../assets/json/NouveauxQuiz.json'
import QuizEffectue from '../../assets/json/QuizEffectue.json'

function Home() {
    return (
        <main className='position-relative'>
            <Aside>
                <Navlist />
            </Aside>
            <Header />
            <Navlist addStyle="position-absolute d-lg-none" />
            <Main>
                <TitlePage title="Accueil" />
                <section id='listHome' className='mx-auto row d-flex justify-content-around'>
                    <MiniQuizList data={QuizAvailableList} srcMore="/quiz-disponibles"/>
                    <MiniQuizList data={NouveauxQuiz} srcMore="/quiz-disponibles"/>
                    <MiniQuizList data={QuizEffectue} srcMore="/quiz-disponibles"/>
                    <MiniQuizList data={VosQuiz} srcMore="/mes-quiz"/>
                </section>
            </Main> 
        </main>
    )
}
export default Home