import Intro from './components/Intro'
import Quiz from './components/Quiz'
import Answers from './components/Answers'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import React from "react";


function App() {
  const [quiz, setQuiz] = React.useState([])
  const [answers, setAnswers] = React.useState({})
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Intro/>} />
      <Route path='quiz' element={<Quiz quiz={quiz} setQuiz={setQuiz} answers={answers} setAnswers={setAnswers} />} />
      <Route path='answers' element={<Answers quiz={quiz} setQuiz={setQuiz} answers={answers} setAnswers={setAnswers} />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
