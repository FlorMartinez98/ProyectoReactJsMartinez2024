import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {


  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Mis Productos"/>
    </>
  )
}

export default App