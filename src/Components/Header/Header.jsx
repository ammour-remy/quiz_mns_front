import React from 'react'
import './header.css'

function Header({children}) {
  return (
    <header className='d-flex justify-content-center align-items-center mx-3'>
        {children}
        <h1 className='colorPrimary fw-bold'>Quiz MNS</h1>
    </header>
  )
}
export default Header