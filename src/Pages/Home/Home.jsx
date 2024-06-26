import React from 'react'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import Aside from '../../Components/Aside/Aside'
import Navlist from '../../Components/NavList/NavList'
import "./home.css"

function Home() {
    return (
        <main className='position-relative'>
            <Aside>
                <Navlist /> 
            </Aside>
            <Header />
            <Navlist addStyle="position-absolute d-lg-none" />
            <Main addStyle="d-flex align-items-center justify-content-center">
            </Main>
        </main>
    )
}
export default Home