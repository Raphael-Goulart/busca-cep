import { FiSearch } from 'react-icons/fi';
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      
     <div className="containerInput">
      <input type="text" placeholder="Digite seu CEP" maxlength="9"></input>
      <button   type="button" className="botao"><FiSearch size={25} color="#000000"/></button>
     </div>

    </div>
  );
}

export default App;
