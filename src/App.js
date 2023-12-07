import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import ProductsPage from './Pages/ProductsPage';
import ProductHero from './Components/ProductHero';
import Cart from './Components/Cart';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/products' element={<ProductsPage />} />
    <Route path='/products/:id' element={<ProductHero />} />

    <Route path='/cart' element={<Cart />} />
    <Route path='/login' element={<LogIn />} />
    <Route path='/signup' element={<SignUp/>} />



    </Routes>
    </div>
  );
}

export default App;
