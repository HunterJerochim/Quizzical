import React from 'react'
import { decode } from 'html-entities'
import { nanoid } from "nanoid"
import { Link } from 'react-router-dom'
import AnswerButton from './AnswerButton'

export default function Quiz() {

    const [quiz, setQuiz] = React.useState([])
    const [answers, setAnswers] = React.useState([])

    React.useEffect(() => {
      async function fetchQuiz() {
        const response = await fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple")
        const responseJSON = await response.json()
        setQuiz(responseJSON.results)
      }
      fetchQuiz();
    }, [])

    function handleAnswerClick(answer) {
      console.log(answer)
    }

    function renderAnswerOptions() {
      if (quiz.length > 0) {
        return (
          <div className='questions-container'>
            {quiz.map((question) => {
              const answers = [
                ...question.incorrect_answers,
                question.correct_answer,
              ]
              const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
              return (
                <div key={nanoid()} className='question-container'>
                  <h3 className='questionh3'>{decode(question.question)}</h3>
                  <div className='answers-container'>
                    {shuffledAnswers.map((answer) => (
                      <AnswerButton
                        key={nanoid()}
                        answer={answer}
                        correctAnswer={question.correct_answer}
                        onClick={handleAnswerClick}
                      />
                    ))}
                  </div>
                  <hr className='divider'></hr>
                </div>
              )
            })}
          </div>
        )
      }
    }
    // Shuffle the answer options so the correct answer isn't always last //
        // with the sort() function we can use 'Math.random() - 0.5' as an algorithm to shuffle our array of answers //
    
    /* React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple")
        .then(res => res.json())
        .then(data => setQuiz(data.results))
    }, []) */

    React.useEffect(() => {
        if (quiz.length > 0) {
          console.log(quiz[0]?.question);
          console.log(quiz)
        }
      }, [quiz]);

    return (
    <div>
      <div className="blob-container">
        <img src="https://res.cloudinary.com/dav8yugzm/image/upload/v1675845277/blob_5_kuf8kj.png" className="blob" />
      </div>
      {quiz.length > 0 && (
      <div>
          <div className="answers-container">{renderAnswerOptions()}</div>
          <div className='check-button-container'>
            <Link to='/answers' >
              <button className='check-button'>Check Answers</button>
            </Link>
          </div>
      </div>
    )}
    <div className="blob2-container-question">
            <img src="https://res.cloudinary.com/dav8yugzm/image/upload/v1675888008/blob_5_wgyqqn.png" className="blob2"/>
        </div>
        
    </div>
    )
}

