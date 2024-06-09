import React from 'react'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import Formulaires from '../../Components/Formulaires/Formulaires'
import Aside from '../../Components/Aside/Aside'

function ResetPassword() {
  return (
    <main>
      <Aside />
      <Header />
      <Main addStyle="d-flex align-items-center justify-content-center">
        <Formulaires title="Réinitialiser le mot de passe" />
      </Main>
    </main>
  )
}

export default ResetPassword