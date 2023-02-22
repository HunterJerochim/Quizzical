import React from 'react'
import { decode } from 'html-entities'

export default function AnswerButton({ answer, onClick, correctAnswer}) {
    const [isHeld, setIsHeld] = React.useState(false)

    function handleClick() {
        setIsHeld(!isHeld);
        onClick(answer, !isHeld);
        if (answer === correctAnswer) {
          console.log("correct");
        } else {
          console.log("incorrect");
        }
      }

    return (
        <button
            className='answer-button'
            style={{ backgroundColor : isHeld ? '#D6DBF5' : 'white' }}
            onClick={handleClick}
        >
            {decode(answer)}
        </button>
    )
}