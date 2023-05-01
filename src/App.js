import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <div className='body'>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/series' element={<Series />} />
              <Route path='*' element={<div>Oops something went wrong...</div>} />
            </Routes>
        </div>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
