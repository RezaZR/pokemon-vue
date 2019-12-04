import { pokemonService } from "@/_services";

export const pokemon = {
  state: {
    pokemons: [],
    isPokemonsFilled: false,

    isLoading: false
  },
  getters: {},
  actions: {
    getPokemons({ commit, dispatch }, { limit }) {
      pokemonService.getPokemons({ limit }).then(
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
    setPokemons(state, response) {
      if (state.isPokemonsFilled) {
        state.pokemons = [];
        state.isPokemonsFilled = false;
      }
      state.pokemons.push(response);
    },
    setIsPokemonsFilled(state) {
      state.isPokemonsFilled = !state.isPokemonsFilled;
    }
  }
};
