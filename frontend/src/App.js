import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Home from './pages/Home';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Error from './pages/Error';
import Binge from './pages/Binge';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={ <Homepage/> } />
        <Route path="/shop" element={ <CartProvider>
        <Home />
        <Cart />
      </CartProvider> } />
      <Route path="/binge" element={<Binge/>}/>
      <Route path='*' element={ <Error/> } />

      </Routes>
      
      
    </div>
  )
}

export default App

