  
import axios from "axios";

const urlPokemon = "pokemon/?limit=";

export const pokemonService = {
  getPokemons({ limit }) {
    return axios.get(urlPokemon + limit).then(this.handleResponse);
  },
  handleResponse(response) {
    const request = response.request;
    if (request.status >= 300) {
      const error = request.onerror && JSON.parse(request.onerror);
      return Promise.reject(error);
    }

    return Promise.resolve(response.data);
  }
};