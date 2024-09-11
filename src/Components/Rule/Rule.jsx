import React from 'react';

function Rule({ title, minScore, numberQuestion, onStart }) {
    return (
        <section className="mx-3 p-3 borderPrimary rounded-3">
            <h3>Vous êtes sur le point de commencer le quiz : {title}.</h3>
            <p>Les règles sont simples :</p>
            <ul>
                <li>- Il peut y avoir des questions de type : une seule proposition, plusieurs propositions, blind test, remettre dans l’ordre et relier les propositions.</li>
                <li>- Les types de propositions sont spécifiés en haut à droite de l’affichage du quiz.</li>
                <li>- Des types comme le blind test ont un temps défini de 30 secondes pour répondre.</li>
                <li>- Le score minimum pour valider ce quiz est de : {minScore} / {numberQuestion}.</li>
                <li>- Vous pouvez refaire le quiz afin d’augmenter votre score.</li>
            </ul>
            <p>Bonne participation.</p>
            <article className='d-flex justify-content-center'>
                <button onClick={onStart} className="borderPrimary buttonPlay bgPrimary text-white p-2 px-4 rounded-3">
                    Commencer le quiz
                </button>
            </article>
        </section>
    );
}

export default Rule;
