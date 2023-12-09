import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import ProductsPage from './Pages/ProductsPage';
import ProductHero from './Components/ProductHero';
import Cart from './Components/Cart';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import MyAccount from './Components/MyAccount';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/products' element={<ProductsPage />} />
    <Route path='/products/:id' element={<ProductHero />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/myaccount' element={<MyAccount />} />

    <Route path='/cart' element={<Cart />} />
    <Route path='/login' element={<LogIn />} />
    <Route path='/signup' element={<SignUp/>} />



    </Routes>
    </div>
  );
}

export default App;
