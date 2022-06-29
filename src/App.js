import { useState } from 'react'; /*hook*/
import { FiSearch } from 'react-icons/fi';
import './style.css';
import api from './services/api.js' 

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
   
    if(input === ''){
      alert("Por favor, preencha o CEP no campo de busca.")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data); /*o que nos queremos dentro do objeto é o response.data onde contem as info*/
      setInput("");

    }catch{
      alert("CEP não existe, digite um CEP válido.");
      setInput(""); /*limpa o campo se algo foi digitado errado */
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      
     <div className="containerInput">
      <input type="text" placeholder="Digite seu CEP" maxLength="9" onkeypress="$(this).mask('00000-000')" value={input}
       onChange={(evento) => setInput(evento.target.value)}/>
      <button   type="button" className="buttonSearch"><FiSearch size={25} color="#000000"
      onClick={handleSearch}/></button>
     </div>

    {Object.keys(cep).length > 0 && (
      <main className="main">
      <h2>CEP: {cep.cep}</h2>

      <span>{cep.logradouro}</span>
      <span>Bairro: {cep.bairro}</span>
      <span>Complemento: {cep.complemento}</span>
      <span>Localidade: {cep.localidade} - {cep.uf}</span>
    </main>
    )}
    </div>
  );
}

export default App;
