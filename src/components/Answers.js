import React, { useState, useEffect } from 'react';
import { decode } from 'html-entities';

export default function Answers({ answers, quiz, setAnswers }) {
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);

  useEffect(() => {
    let totalCorrectAnswers = 0;
    Object.entries(answers).forEach(([questionNumber, answer]) => {
      const question = quiz[questionNumber];
      const correctAnswer = question.correct_answer;
      if (decode(answer) === decode(correctAnswer)) {
        totalCorrectAnswers++;
      }
    });
    setNumCorrectAnswers(totalCorrectAnswers);
  }, [answers, quiz]);

  return (
    <div>
      {Object.entries(answers).map(([questionNumber, answer]) => {
        const question = quiz[questionNumber];
        const correctAnswer = question.correct_answer;
        const options = [...question.incorrect_answers, correctAnswer];

        return (
          <div className='question-container' key={`answer-${questionNumber}`}>
            <h3 className='question'>
              <strong>{decode(question.question)}: </strong>
            </h3>
            <div className='answers-container'>
              {options.map((option, index) => (
                <button
                  key={index}
                  className='answer-button2'
                  style={{
                    backgroundColor:
                      decode(option) === decode(correctAnswer)
                        ? '#94D7A2'
                        : decode(option) === decode(answer)
                        ? '#F8BCBC'
                        : '',
                  }}
                  disabled
                >
                  {decode(option)}
                </button>
              ))}
            </div>
            <hr className='divider'></hr>
          </div>
        );
      })}
      <p className='num-correct-answers'>You scored {numCorrectAnswers}/10 correct answers</p>
    </div>
  );
}


/* 1st: We are passing 'answers' & 'quiz' in as props ot our component. answers is equal to the user's answers to each question in the quiz.
'quiz' is equal to an array of objects that represent the questions and answer options in the quiz. */

/* 2nd: we are using 'Object.entries' to loop over the 'answers' object and return an array of arrays, with each inner array containing two elements: 
the first element is the key of the current property being looped over and the second element is the value of that property. */

/* 3rd:  We are using the map method. Here we are using 'destructuring assignment'. When you use Object.entries() method on the answers object, 
it returns an array of arrays where each inner array represents a key-value pair as [key, value]. In this case the key is the the question number and
the value is the answer selected by the user. This is a way for us to extract these values without having to use array indexing. A side note, here we are 
using '[]' brackets because we are destructring and array instead of an object. */

/* 4th: We are declaring 3 different variables. 
  1st, we have 'question' which is equal to the value of the element in the quiz array at the index specified by questionNumber.
In this case the value of that index is the question itself 
  2nd, we have 'correctAnswer' which is equal to 
*/
  

