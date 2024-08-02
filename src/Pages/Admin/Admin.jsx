import React from 'react'
import Aside from '../../Components/Aside/Aside'
import Navlist from '../../Components/NavList/NavList'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import "./admin.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Admin() {
  return (
    <main>
      <Aside>
        <Navlist />
      </Aside>
      <Header />
      <Navlist addStyle="position-absolute d-lg-none" />
      <Main>
        <h1 className='text-center mb-5'>Administration</h1>
        <div className='mb-5 button:hover'>
          <button className='rounded-pill color2 color3 color4 ms-4'>Liste des quiz</button>
          <button className='rounded-pill color2 color3 color4 ms-4'>Liste des quiz privés</button>
          <button className='rounded-pill color2 color3 color4 ms-4'>Liste de utilisateurs</button>
        </div>

        <div className='custom-border rounded ms-2 me-2'>
          <h2 className='text-center mb-5'>Liste des quiz</h2>

          <div className='d-flex flex-row justify-content-between'>
            <h3 className='fs-4'>Titre</h3>
            <h3 className='fs-4'>Création</h3>
            <h3 className='fs-4'>Statut</h3>
            <div>
              <h3 className='fs-4'>Gestion du quiz</h3>
              <div className='d-flex flex-row justify-content-between'>
                <h4 className='fs-6'>Modifier</h4>
                <h4 className='fs-6'>supprimer</h4>
                <h4 className='fs-6'>Passer en privé / public</h4>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </main>
  )
}

export default Admin