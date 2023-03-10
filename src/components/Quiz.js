import React from 'react'
import { decode } from 'html-entities'
import { Link } from 'react-router-dom'
import AnswerButton from './AnswerButton'

export default function Quiz({
  quiz, 
  setQuiz,
  answers,
  setAnswers
                             }) {

    React.useEffect(() => {
      async function fetchQuiz() {
        const response = await fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple")
        const responseJSON = await response.json()
 
        const quiz = responseJSON.results.map((question, index) => {
          // get all of the answers
          const answers = [
            ...question.incorrect_answers,
            question.correct_answer,
          ]
          
          // randomize the order of the answers
          const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
          
          return {
            ...question,
            shuffledAnswers,
            questionNumber: index // needed to store the answer data in state
          }
        })
        setQuiz(quiz)
      }
      fetchQuiz();
    }, [])

    function handleAnswerClick(question, answer, index) {
      // is this already my current selection
      const isActive = answers[index] === answer

      console.log({handleAnswers: answers})
      
      setAnswers({
        ...answers,
        [index] : isActive ? '' : answer
      })
    }

    React.useEffect(() => {
      setAnswers({})
    }, [])
    
    function renderAnswerOptions() {
      if (quiz.length > 0) {
        return (
          <div className='questions-container'>
            {quiz.map(({ shuffledAnswers, ...question}, index) => {
              return (
                <div key={`question-${index}-wrapper`} className='question-container'>
                  <h3 className='questionh3'>{decode(question.question)}</h3>
                  <div className='answers-container'>
                    {shuffledAnswers.map((answer, shuffledIndex) => (
                        <AnswerButton
                          key={`question-${index}-button-${shuffledIndex}`}
                          answer={answer}
                          isActive={answers[index] === answer}
                          correctAnswer={question.correct_answer}
                          onClick={answer => handleAnswerClick(question.question, answer, index)}
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

    /* React.useEffect(() => {
        if (quiz.length > 0) {
          console.log(quiz[0]?.question);
          console.log(quiz)
          console.log(answers)
        }
      }, [quiz, answers]); */

    return (
    <div>
      <div className="blob-container">
        <img src="https://res.cloudinary.com/dav8yugzm/image/upload/v1675845277/blob_5_kuf8kj.png" className="blob" />
      </div>
      {quiz.length > 0 && (
      <div>
          <div className="answers-container">{renderAnswerOptions()}</div>
          <div className='check-button-container'>
            <Link to={{ pathname: '/answers' }}>
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

