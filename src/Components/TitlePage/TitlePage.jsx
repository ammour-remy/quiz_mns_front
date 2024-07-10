import React from 'react'

function TitlePage(props) {
    return (
        <section className='p-3'>
            <h2 className='colorPrimary fw-bold text-center text-lg-start'>{props.title}</h2>
        </section>
    )
}
export default TitlePage