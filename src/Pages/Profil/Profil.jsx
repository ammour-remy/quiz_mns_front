import React from 'react'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import Aside from '../../Components/Aside/Aside'
import Navlist from '../../Components/NavList/NavList'
import "./profil.css"
import dataUser from '../../assets/json/userProfil.json'
import TitlePage from '../../Components/TitlePage/TitlePage'

function Profil() {
    return (
        <main className='position-relative'>
            <Aside>
                <Navlist />
            </Aside>
            <Header />
            <Navlist addStyle="position-absolute d-lg-none" />
            <Main>
                <TitlePage title="Profil" />
                <article className='container d-flex flex-column align-items-center'>
                    <section className='boxProfil container row rounded-4'>
                        <h3 className='py-3 text-center mb-md-4'>Informations personnelles</h3>
                        <article className='p-3 col-md-8 fw-semibold colorSecondary fs-5'>
                            <p>Nom : {dataUser.nom}</p>
                            <p>Prénom : {dataUser.prenom}</p>
                            <p>Adresse mail : {dataUser.email}</p>
                        </article>
                        <article className='buttonEdite mx-auto rounded-3 fs-5 fw-semibold mb-4'>
                            <p className='m-2 mx-3'>Modifier les informations du compte</p>
                        </article>
                    </section>
                    <section className='boxProfil my-4 row mx-auto container rounded-4'>
                        <h3 className='py-3 col-12 text-center m-0'>Statistiques</h3>
                        <article className='p-3 d-flex col-xl-6 borderStat colorSecondary'>
                            <section className='w-50'>
                                <p className='fw-semibold'>Quiz crée :<span className='fw-normal ms-2'>12</span></p>
                                <p className='fw-semibold'>Quiz effectués :<span className='fw-normal ms-2'>37</span></p>
                                <p className='fw-semibold'>Quiz réussis :<span className='fw-normal ms-2'>20</span></p>
                            </section>
                            <section className='w-50'>
                                <p className='fw-semibold'>Quiz ratés :<span className='fw-normal ms-2'>17</span></p>
                                <p className='fw-semibold'>Quiz non effectués :<span className='fw-normal ms-2'>21</span></p>
                                <p className='fw-semibold'>Vos quiz validé par l'application :<span className='fw-normal ms-2'>07</span></p>
                            </section>
                        </article>
                        <article className='p-3 pb-0 col-xl-6 fs-5 colorSecondary'>
                                <p className='fw-semibold'>Votre quiz le plus utilisé pas les utilisateur :<span className='fw-normal ms-2'>RGPD</span></p>
                                <p className='fw-semibold'>Quiz vous avez le plus essayé par vous :<span className='fw-normal ms-2'>Dev Ops</span></p>
                                <p className='fw-semibold'>Le mieux réussi par vous :<span className='fw-normal ms-2'>Dev Ops</span></p>
                        </article>
                    </section>
                </article>
            </Main>
        </main>
    )
}

export default Profil