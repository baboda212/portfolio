import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//라우터에 연결할 페이지 불러오기
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
