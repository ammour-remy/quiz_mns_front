import React from 'react'
import './quizList.css'
import TitlePage from '../TitlePage/TitlePage'

function QuizList(props) {
    return (
        <article>
            <TitlePage title={props.data.title}/>
            <section>
                <ul className='px-3 d-flex flex-column align-items-center list-unstyled'>
                    <li className='fw-semibold row w-100 underlineCustomList'>
                        <article className='col-3 col-md-3'>
                            <p>Titre du quiz</p>
                        </article>
                        <article className='col-3 p-0 col-md-2 text-md-center'>
                            <p>Date de création</p>
                        </article>
                        <article className='col-3 p-0 ps-md-2 col-md-1'>
                            <p>Statut</p>
                        </article>
                        <article className='col-3 col-md-1 text-md-center'>
                            <p>Réussi</p>
                        </article>
                        <article className='col-3 col-md-1'>
                            <p>Score</p>
                        </article>
                        {props.data.title === "Quiz disponibles" && (
                            <>
                                <article className='col-3 col-md-1'>
                                    <p>Essais</p>
                                </article>
                                <article className='col-3 col-md-1'>
                                    <p>Équipe</p>
                                </article>
                            </>
                        )}
                        {props.data.title === "Vos Quiz" && (
                            <>
                                <article className='col-3 col-md-1 px-0 text-md-center'>
                                    <p>Modifier</p>
                                </article>
                                <article className='col-3 col-md-1 px-0 text-md-center'>
                                    <p>Supprimer</p>
                                </article>
                            </>
                        )}
                        <article className='col-3 col-md-2 text-md-center'>
                            <p>Commencer</p>
                        </article>
                    </li>
                    {props.data.content.map((quiz, index) => (
                        <li key={index} className='fw-semibold w-100 row underlineCustomList'>
                            <article className=' my-auto col-3 col-md-3'>
                                <p>{quiz.titre_du_quiz}</p>
                            </article>
                            <article className=' my-auto col-3 col-md-2 text-md-center'>
                                <p>{quiz.date_de_creation}</p>
                            </article>
                            <article className=' my-auto col-3 col-md-1'>
                                <p>{quiz.statut}</p>
                            </article>
                            <article className='my-auto col-3 col-md-1 text-md-center fs-4'>
                                <p className={quiz.reussi ? 'text-success' : 'text-danger'}>
                                    <i className={`bi fs-3 ${quiz.reussi ? 'bi-check-circle-fill' : 'bi-x-circle-fill'}`}></i>
                                </p>
                            </article>
                            <article className=' my-auto col-3 text-md-start ps-md-4 col-md-1'>
                                <p>{quiz.score}</p>
                            </article>
                            {props.data.title === "Quiz disponibles" && (
                                <>
                                    <article className=' my-auto col-3 col-md-1'>
                                        <p>{quiz.essais}</p>
                                    </article>
                                    <article className=' my-auto col-3 col-md-1'>
                                        <p>{quiz.equipe}</p>
                                    </article>
                                </>
                            )}
                            {props.data.title === "Vos Quiz" && (
                                <>
                                    <article className=' my-auto col-3 col-md-1 text-md-center'>
                                        <p><i className="bi bi-pencil-square text-primary fs-3"></i></p>
                                    </article>
                                    <article className=' my-auto col-3 col-md-1 text-md-center'>
                                        <p><i className="bi bi-trash text-danger fs-3"></i></p>
                                    </article>
                                </>
                            )}
                            <article className=' my-auto col-3 col-md-2 text-md-center'>
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