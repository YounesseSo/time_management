import './global.css';
import Home from "./components/Home/Home";
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Intro from './components/Intro/Intro';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />          
          <Route path='/intro' element={<Intro/>} />          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
