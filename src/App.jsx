import './global.css';
import Home from "./components/Home/Home";
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Intro from './components/Intro/Intro';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration:950,
}
);
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
