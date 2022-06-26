import { FiSearch } from 'react-icons/fi';
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      
     <div className="containerInput">
      <input type="text" placeholder="Digite seu CEP" maxLength="9"></input>
      <button   type="button" className="buttonSearch"><FiSearch size={25} color="#000000"/></button>
     </div>

    <main className="main">
      <h2>CEP: 05848-000</h2>

      <span>Rua Teste</span>
      <span>Bairro</span>
      <span>Complemento</span>
      <span>Cidade / Estado</span>
    </main>
    </div>
  );
}

export default App;
