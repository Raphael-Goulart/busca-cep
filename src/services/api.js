import axios from "axios";

// http://https://viacep.com.br/ws/ URL que nunca irá mudar o que estiver após a barra é rota 

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});

export default api;