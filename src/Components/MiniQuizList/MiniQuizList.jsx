import React from 'react'
import "./miniQuizList.css"
import { Link } from 'react-router-dom'

function MiniQuizList(props) {
    return (
        <section className='col-12 boxHome p-0 col-lg-5 position-relative rounded-4 text-center'>
            <article className='listHome py-2'>
                <h3>{props.data.title}</h3>
            </article>
            <ul className='p-0 m-0 list-unstyled colorSecondary' >
                {props.data.content.slice(0, 6).map((quiz, index) => (
                    <li key={index} className={`listHome ${index === 5 ? 'border-0' : ''}`}>
                        <p className='texy-center m-0 p-2'>{quiz.titre_du_quiz}</p>
                    </li>
                ))}
            </ul>
            <article className='bgPrimary fw-semibold position-absolute bottom-0 end-0 border-0 p-2 px-3 rounded-3 buttonMore'>
                <Link
                    to={props.srcMore}
                    className='text-decoration-none text-dark' 
                >
                    Voir plus +
                </Link>
            </article>
        </section>
    )
}

export default MiniQuizList