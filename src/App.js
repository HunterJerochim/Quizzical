import Intro from './components/Intro'
import Quiz from './components/Quiz'
import Answers from './components/Answers'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Intro/>} />
      <Route path='quiz' element={<Quiz />} />
      <Route path='answers' element={<Answers />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
