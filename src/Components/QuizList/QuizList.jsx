import React from 'react'
import './quizList.css'

function QuizList(props) {
    console.log(props.data)
    return (
        <article>
            <section className='p-3'>
                <h2 className='colorPrimary fw-bold text-center text-lg-start'>{props.data.title}</h2>
            </section>
            <section>
                <ul className='px-3 d-flex flex-column align-items-center list-unstyled'>
                    <li className='fw-semibold row w-100 underlineCustomList'>
                        <article className='col-3'>
                            <p>Titre du quiz</p>
                        </article>
                        <article className='col-2 text-center'>
                            <p>Date de création</p>
                        </article>
                        <article className='col-1'>
                            <p>Statut</p>
                        </article>
                        <article className='col-1'>
                            <p>Réussi</p>
                        </article>
                        <article className='col-1'>
                            <p>Score</p>
                        </article>
                        <article className='col-1'>
                            <p>Essais</p>
                        </article>
                        <article className='col-1'>
                            <p>Équipe</p>
                        </article>
                        <article className='col-2 text-center'>
                            <p>Commencer</p>
                        </article>
                    </li>
                    {props.data.content.map((quiz, index) => (
                        <li key={index} className='fw-semibold w-100 row underlineCustomList'>
                            <article className=' my-auto col-3'>
                                <p>{quiz.titre_du_quiz}</p>
                            </article>
                            <article className=' my-auto col-2 text-center'>
                                <p>{quiz.date_de_creation}</p>
                            </article>
                            <article className=' my-auto col-1'>
                                <p>{quiz.statut}</p>
                            </article>
                            <article className='my-auto col-1 text-center fs-4'>
                                <p className={quiz.reussi ? 'text-success' : 'text-danger'}>
                                    <i className={`bi fs-3 ${quiz.reussi ? 'bi-check-circle-fill' : 'bi-x-circle-fill'}`}></i>
                                </p>
                            </article>
                            <article className=' my-auto col-1'>
                                <p>{quiz.score}</p>
                            </article>
                            <article className=' my-auto col-1'>
                                <p>{quiz.essais}</p>
                            </article>
                            <article className=' my-auto col-1'>
                                <p>{quiz.equipe}</p>
                            </article>
                            <article className=' my-auto col-2 text-center'>
                                <p>
                                    <i className="bi bi-play-fill text-success fs-3"></i>
                                </p>
                            </article>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    )
}

export default QuizList