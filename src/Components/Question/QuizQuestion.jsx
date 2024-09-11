import React, { useState, useEffect } from 'react';
import { DndContext } from '@dnd-kit/core';
import { SortableContext, useSortable, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { arrayMove } from '@dnd-kit/sortable';

// Fonction pour mélanger les réponses
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Composant pour les éléments de Drag-and-Drop
function SortableItem({ id, answer }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: isDragging ? 'none' : transition,
        padding: '16px',
        margin: '0 8px',
        backgroundColor: isDragging ? 'lightgrey' : 'white',
        borderRadius: '4px',
        border: '1px solid lightgrey',
        height: '50px',
        flex: '1 1 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {answer.name}
        </li>
    );
}

function QuizQuestion({ question, index, onValidate, savedAnswers, onSaveAnswers }) {
    const [selectedAnswers, setSelectedAnswers] = useState(savedAnswers || []);
    const [answers, setAnswers] = useState(savedAnswers ? question.answers : shuffle([...question.answers]));

    useEffect(() => {
        // Charger les réponses sauvegardées si elles existent déjà
        if (savedAnswers) {
            setSelectedAnswers(savedAnswers);
        }
    }, [savedAnswers]);

    // Gestion du changement pour les questions à choix multiple (type 2)
    const handleCheckboxChange = (answerId) => {
        const updatedSelectedAnswers = selectedAnswers.includes(answerId)
            ? selectedAnswers.filter((id) => id !== answerId)
            : [...selectedAnswers, answerId];
        setSelectedAnswers(updatedSelectedAnswers);
        onSaveAnswers(question.id, updatedSelectedAnswers); // Sauvegarder la sélection
    };

    // Gestion du changement pour les questions à choix unique (type 1 et type 3)
    const handleRadioChange = (answerId) => {
        setSelectedAnswers([answerId]);
        onSaveAnswers(question.id, [answerId]); // Sauvegarder la sélection
    };

    // Gestion du Drag-and-Drop pour les questions de type 4
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const oldIndex = answers.findIndex((a) => a.id === active.id);
        const newIndex = answers.findIndex((a) => a.id === over.id);
        const newAnswers = arrayMove(answers, oldIndex, newIndex);

        setAnswers(newAnswers);
        onSaveAnswers(question.id, newAnswers); // Sauvegarder l'ordre modifié
    };

    // Gestion des questions de type 5 (Associer des réponses)
    const handleDropdownChange = (idx, value) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[idx] = value;
        setSelectedAnswers(updatedAnswers);
        onSaveAnswers(question.id, updatedAnswers); // Sauvegarder les sélections des dropdowns
    };

    // Valider la question
    useEffect(() => {
        const isValid = selectedAnswers.length > 0 || (answers && answers.length > 0);
        onValidate(isValid);
    }, [selectedAnswers, answers, onValidate]);

    return (
        <section className="my-4">
            <h4>Question {index + 1}: {question.name}</h4>

            {/* Choix unique (type 1 et 3) */}
            {(question.type.id === 1 || question.type.id === 3) && (
                <div className="row my-5">
                    {answers && answers.map((answer) => (
                        <div key={answer.id} className="col-12 col-md-6 my-4">
                            <label className="d-flex align-items-center w-100">
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    value={answer.id}
                                    onChange={() => handleRadioChange(answer.id)}
                                    checked={selectedAnswers.includes(answer.id)}
                                    className="me-2"
                                />
                                {answer.name}
                            </label>
                        </div>
                    ))}
                </div>
            )}

            {/* Choix multiple (type 2) */}
            {question.type.id === 2 && (
                <div className="row my-5">
                    {answers && answers.map((answer) => (
                        <div key={answer.id} className="col-12 col-md-6 my-4">
                            <label className="d-flex align-items-center w-100">
                                <input
                                    type="checkbox"
                                    name={`question-${index}`}
                                    value={answer.id}
                                    onChange={() => handleCheckboxChange(answer.id)}
                                    checked={selectedAnswers.includes(answer.id)}
                                    className="me-2"
                                />
                                {answer.name}
                            </label>
                        </div>
                    ))}
                </div>
            )}

            {/* Drag-and-drop (type 4) */}
            {question.type.id === 4 && answers && (
                <DndContext onDragEnd={handleDragEnd}>
                    <SortableContext items={answers.map((answer) => answer.id)} strategy={horizontalListSortingStrategy}>
                        <ul className="list-unstyled w-100 py-3 rounded-3 my-5" style={{
                            backgroundColor: 'lightgrey',
                            padding: 4,
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            {answers.map((answer) => (
                                <SortableItem key={answer.id} id={answer.id} answer={answer} />
                            ))}
                        </ul>
                    </SortableContext>
                </DndContext>
            )}

            {/* Associer les réponses (type 5) */}
            {question.type.id === 5 && (
                <div className="d-flex flex-column align-items-start">
                    {question.answers && question.answers.filter((_, idx) => idx % 2 === 0).map((leftAnswer, idx) => (
                        <div key={leftAnswer.id} className="d-flex my-2 align-items-center" style={{ width: '100%' }}>
                            <div className="static-answer px-2 py-1" style={{
                                backgroundColor: 'lightgrey',
                                borderRadius: '4px',
                                width: '50%',
                                textAlign: 'center',
                                marginRight: '16px'
                            }}>
                                {leftAnswer.name}
                            </div>

                            <select
                                className="form-select"
                                style={{ width: '50%' }}
                                value={selectedAnswers[idx] || ""}
                                onChange={(e) => handleDropdownChange(idx, e.target.value)}
                            >
                                <option value="">Réponse à relier</option>
                                {question.answers.filter((_, i) => i % 2 !== 0).map((rightAnswer) => (
                                    <option key={rightAnswer.id} value={rightAnswer.id}>
                                        {rightAnswer.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default QuizQuestion;
