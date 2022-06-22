import { FiSearch } from 'react-icons/fi';
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      
     <div className="containerInput">
      <input type="text" placeholder="Digite seu CEP" maxlength="9"></input>
      <button   type="button" className="botao"><FiSearch size={25} color="#000000"/></button>
     </div>

    <main className="main">
      <h2>CEP: 05848-000</h2>

      <span>Rua Teste</span>
      <span>Complemento, Bairro, Cidade Teste</span>
    </main>
    </div>
  );
}

export default App;
