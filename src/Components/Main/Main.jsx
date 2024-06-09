import React from 'react';
import './main.css';

function Main({ children, addStyle}) {
  return (
    <section id='main' className={addStyle}>
      {children}
    </section>
  );
}

export default Main;
