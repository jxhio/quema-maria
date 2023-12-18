import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Nuestros Productos"}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad Agregada ",quantity)}/>
    </div>
  );
}

export default App;
