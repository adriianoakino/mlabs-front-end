import axios from 'axios';
import * as _ from 'lodash';
import { BASE_URL } from '../environment/consts';

export const openURL = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
});

openURL.interceptors.response.use(
    (response)  => { return response.data }, 
    (error)     => { return eventHandlerError(error) }
);

const MENSAGEM_ERRO     = `Erro inesperado do servidor, por favor tente novamente mais tarde.`;
const MENSAGEM_TIMEOUT  = `Tempo de espera esgotado. Tente novamente em alguns instantes.`;
const MENSAGEM_NETWORK  = `Não possui conexão ou estamos offline, por favor tente novamente mais tarde.`;

export const eventHandlerError = (error) => {
    console.log("ERROR HANDLE", error)
    const { data, status } = error.response  
    
    if(_.isEqual(error.message, "Network Error")) { return MENSAGEM_NETWORK }
    if(_.isEqual(error.code, "ECONNABORTED"))     { return MENSAGEM_TIMEOUT }
    if(_.isEqual(data.error, "Unauthorized"))     { return data.message }

    if(status > 400) { return MENSAGEM_ERRO }
    else { return data.message ? data.message : MENSAGEM_ERRO } 
}