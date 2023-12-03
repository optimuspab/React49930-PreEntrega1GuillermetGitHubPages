import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div id="app">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenido a Trendy Tech!'}/>
    </div>
  );
}

export default App
