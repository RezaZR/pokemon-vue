import axios from "axios";

const urlPokemon = "pokemon/?limit=";

export const pokemonService = {
  getPokemon(data) {
    return axios.get(data.url).then(this.handleResponse);
  },
  getPokemons(data) {
    if (data.isInitialData) {
      return axios.get(urlPokemon + data.limit).then(this.handleResponse);
    } else {
      return axios.get(data.url).then(this.handleResponse);
    }
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
