import axios from "axios";

const urlPokemon = "pokemon/";

export const pokemonService = {
  async getPokemon(data) {
    const result = await axios
      .get(urlPokemon + data.name)
      .then(this.handleResponse);

    return result;
  },
  async getPokemons(data) {
    let result = null;
    if (data.isInitialData) {
      result = await axios
        .get(urlPokemon + "?limit=" + data.limit)
        .then(this.handleResponse);
    } else {
      result = await axios.get(data.url).then(this.handleResponse);
    }

    return result;
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
