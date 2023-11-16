import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import Header from './Container/Header';
import ProductListing from './Container/ProductListing';
import ProductDetails from './Container/ProductDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<ProductListing/>} />
          <Route path='/product/:productId' element={<ProductDetails/>} />
          <Route>404 Not Found</Route>
        </Routes>
      
      </BrowserRouter>
      
    </>
  );
}

export default App;
