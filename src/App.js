import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/slick.css'
import './assets/css/bootstrap.min.css'
import './assets/css/swap.css'
import './assets/css/style.css'
import './assets/css/media-query.css'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Blog from './pages/Blog.jsx';
import Preloader from './component/Preloader.jsx'
import BgAnimation from './component/BgAnimation.jsx'


function App() {
  return (
    <>
      <Preloader />
      <BgAnimation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;