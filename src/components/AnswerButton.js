import React from 'react'
import { decode } from 'html-entities'

export default function AnswerButton({ answer, onClick, isActive }) {

    function handleClick() {
        onClick(answer);
      }

    return (
        <button
            className='answer-button'
            style={{ backgroundColor : isActive ? '#D6DBF5' : 'white' }}
            onClick={handleClick}
        >
            {decode(answer)}
        </button>
    )
}
