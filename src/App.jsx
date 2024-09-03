import './App.css'
import ItemListContainer from './assets/componentes/ItemListContainer/ItemListContainer'
import NavBar from './assets/componentes/NavBar/NavBar'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Mis Productos"/>
    </>
  )
}

export default App