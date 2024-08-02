import React from 'react'
import './newQuiz.css'

import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import Aside from '../../Components/Aside/Aside'
import Navlist from '../../Components/NavList/NavList'
import TitlePage from '../../Components/TitlePage/TitlePage'
import FormulaireCreateQuiz from '../../Components/Formulaires/FormulaireCreateQuiz'

function NewQuiz() {
  return (
    <main>
         <Aside>
                <Navlist />
            </Aside>
            <Header />
            <Navlist addStyle="position-absolute d-lg-none" />
            <Main>
                <TitlePage title="Créer votre quiz" />
                <FormulaireCreateQuiz/>
            </Main>
    </main>
  )
}

export default NewQuiz