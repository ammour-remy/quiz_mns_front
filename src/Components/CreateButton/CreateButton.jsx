import React from 'react'
import "./createButton.css"
import {Link} from 'react-router-dom';

function CreateButton(props) {
  return (
    <article className='p-3 px-md-5 position-absolute btnCreate text-white rounded-3'>
      <Link
        to="/nouveau-quiz"
        className='text-white text-decoration-none'
      >
      <p className='m-0'>
        <span className='d-none d-md-inline'> Crée un nouveau</span>  {props.title} +
      </p>
      </Link>

    </article>
  )
}

export default CreateButton