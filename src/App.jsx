import './App.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Cart from './componentes/Cart/Cart'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Checkout from "./componentes/Checkout/Checkout"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
              <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="*" element={
                <div style={{ textAlign: 'center' }}>
                  <img src="/public/imagenes/construccion.jpg" alt="En construcción"/>
                </div>}/>
            </Routes>
        </CarritoProvider>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App