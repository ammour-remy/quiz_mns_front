import React from 'react'
import './aside.css'

function Aside({children}) {
  return (
    <aside className='d-none d-lg-block bgSecondary'>
         {children}
    </aside>
  )
}
export default Aside