// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './navList.css';

// function NavList() {
//     const location = useLocation();

//     return (
//         <nav className='d-lg-flex flex-column justify-content-between'>
//             <ul className='list-unstyled h-100'>
//                 <li className={`d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle ${location.pathname === '/home' ? 'active' : 'text-white'}`}>
//                     <Link to="/home" className='text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 text-white'>
//                         Accueil
//                     </Link>
//                 </li>
//                 <li className={`d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle ${location.pathname === '/Administration' ? 'active' : 'text-white'}`}>
//                     <Link to="/inscription" className='text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 txt-white'>
//                         Administration
//                     </Link>
//                 </li>
//                 <li className={`d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle ${location.pathname === '/profil' ? 'active' : 'text-white'}`}>
//                     <Link to="/profil" className='text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 text-white'>
//                         Profil
//                     </Link>
//                 </li>
//                 <li className={`d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle ${location.pathname === '/quiz-disponibles' ? 'active' : 'text-white'}`}>
//                     <Link to="/quiz-disponibles" className='text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 text-white'>
//                         Quiz disponibles
//                     </Link>
//                 </li>
//                 <li className={`d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle ${location.pathname === '/vos-quiz' ? 'active' : 'text-white'}`}>
//                     <Link to="/vos-quiz" className='text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 text-white'>
//                         Vos Quiz
//                     </Link>
//                 </li>
//                 <li className={`d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle ${location.pathname === '/mentions-legales' ? 'active' : 'text-white'}`}>
//                     <Link to="/mentions-legales" className='text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 text-white'>
//                         Mentions légales
//                     </Link>
//                 </li>
//                 <li className={`d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle ${location.pathname === '/politique-confidentialite' ? 'active' : 'text-white'}`}>
//                     <Link to="/politique-confidentialite" className='text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 text-white'>
//                         Politique de confidentialité
//                     </Link>
//                 </li>
//             </ul>
//             <p className='d-none d-lg-block text-center text-white'>Copyright © 2024 PAQUAM</p>
//         </nav>
//     );
// }

// export default NavList;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navList.css';

function NavList() {
    const location = useLocation();

    return (
        <nav className='d-lg-flex flex-column justify-content-between'>
            <ul className='list-unstyled h-100'>
                <li className='d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle'>
                    <Link 
                        to="/home" 
                        className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 m-1 ${location.pathname === '/home' ? 'active' : 'text-white'}`}
                    >
                        Accueil
                    </Link>
                </li>
                <li className='d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle'>
                    <Link 
                        to="/inscription" 
                        className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 ${location.pathname === '/inscription' ? 'active' : 'text-white'}`}
                    >
                        Administration
                    </Link>
                </li>
                <li className='d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle'>
                    <Link 
                        to="/profil" 
                        className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 ${location.pathname === '/profil' ? 'active' : 'text-white'}`}
                    >
                        Profil
                    </Link>
                </li>
                <li className='d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle'>
                    <Link 
                        to="/quiz-disponibles" 
                        className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 ${location.pathname === '/quiz-disponibles' ? 'active' : 'text-white'}`}
                    >
                        Quiz disponibles
                    </Link>
                </li>
                <li className='d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle'>
                    <Link 
                        to="/vos-quiz" 
                        className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 ${location.pathname === '/vos-quiz' ? 'active' : 'text-white'}`}
                    >
                        Vos Quiz
                    </Link>
                </li>
                <li className='d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle'>
                    <Link 
                        to="/mentions-legales" 
                        className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 ${location.pathname === '/mentions-legales' ? 'active' : 'text-white'}`}
                    >
                        Mentions légales
                    </Link>
                </li>
                <li className='d-flex w-100 justify-content-center justify-content-lg-startcenter navStyle'>
                    <Link 
                        to="/politique-confidentialite" 
                        className={`text-decoration-none ps-lg-4 h-100 d-flex align-items-center w-100 ${location.pathname === '/politique-confidentialite' ? 'active' : 'text-white'}`}
                    >
                        Politique de confidentialité
                    </Link>
                </li>
            </ul>
            <p className='d-none d-lg-block text-center text-white'>Copyright © 2024 PAQUAM</p>
        </nav>
    );
}

export default NavList;
