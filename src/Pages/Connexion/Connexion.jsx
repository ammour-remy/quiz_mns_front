import React from 'react'
import Aside from '../../Components/Aside/Aside'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import Formulaires from '../../Components/Formulaires/Formulaires'

function Connexion() {
  return (
    <main>
        <Aside/>
        <Header/>
        <Main addStyle="d-flex align-items-center justify-content-center">
            <Formulaires title="Connectez-vous"/>
        </Main>
    </main>
  )
}

export default Connexion