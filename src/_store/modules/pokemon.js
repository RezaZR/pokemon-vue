import { pokemonService } from "@/_services";

export const pokemon = {
  state: {
    pokemon: null,

    pokemons: null,
    isPokemonsFilled: false,

    isLoading: false
  },
  getters: {},
  actions: {
    getPokemon({ commit, dispatch }, data) {
      pokemonService.getPokemon(data).then(
        async response => {
          commit("setPokemon", response);

          console.log(response);
          return response;
        },
        error => {
          dispatch("alert/error", error, { root: true });

          return error;
        }
      );
    },
    getPokemons({ commit, dispatch }, data) {
      pokemonService.getPokemons(data).then(
        async response => {
          commit("setPokemons", response);
          commit("setIsPokemonsFilled");

          return response;
        },
        error => {
          dispatch("alert/error", error, { root: true });

          return error;
        }
      );
    }
  },
  mutations: {
    setPokemon(state, response) {
      state.pokemon = response;
    },
    setPokemons(state, response) {
      if (state.isPokemonsFilled) {
        state.pokemons = [];
        state.isPokemonsFilled = false;
      }
      state.pokemons = response;
    },
    setIsPokemonsFilled(state) {
      state.isPokemonsFilled = !state.isPokemonsFilled;
    }
  }
};
