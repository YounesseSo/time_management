import './global.css';
import Home from "./pages/Home/Home";
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Intro from './pages/Intro/Intro';
import PartOne from './pages/PartOne/PartOne';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />          
          <Route path='/intro' element={<Intro/>} />     
          <Route path='/part-1' element={<PartOne/>} />          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
