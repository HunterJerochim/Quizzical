import React from 'react'
import { decode } from 'html-entities'

export default function Answers({answers, quiz}) {
  console.log(quiz)
  return (
    <div>
        {Object.entries(answers).map(([questionNumber, answer]) => (
          <div className='question-container' key={`answer-${questionNumber}`}>
            <h3 className='question'><strong>{decode(quiz[questionNumber].question)}: </strong></h3>
            <div className='answers-container'>
            {quiz[questionNumber].incorrect_answers.map((option, index) => (
              <button className='answer-button2' key={index} disabled>{decode(option)}</button>
            ))}
            <button 
              className='answer-button2' 
              style={{backgroundColor: '#94D7A2'}}
            >
              {decode(answer)}
            </button>
            <span style={{color: 'red'}}>
              {answer === quiz[questionNumber].correct_answer ? 'true' : 'false'}
            </span>
            </div>
            <hr className='divider'></hr>
          </div>
        ))}
    </div>
  )
}

