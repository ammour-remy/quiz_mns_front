import React from 'react'
import "./createButton.css"

function CreateButton(props) {
  return (
    <article className='p-3 px-md-5 position-absolute btnCreate text-white rounded-3'>
       
        <p className='m-0'>
          <span className='d-none d-md-inline'> Crée un nouveau</span>  {props.title} +
        </p>
        
    </article>
  )
}

export default CreateButton