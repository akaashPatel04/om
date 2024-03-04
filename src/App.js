import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Header, HomeIcon } from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetail from './Product/ProductDetail';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <HomeIcon />
      <Header />
      <ToastContainer position='top-center' theme='colored' hideProgressBar autoClose={800} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
