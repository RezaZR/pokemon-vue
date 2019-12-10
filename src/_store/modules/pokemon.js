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
        responsePokemon => {
          let result = {
            abilities: [],
            height: responsePokemon.height * 10,
            moves: [],
            picture: responsePokemon.sprites.front_default,
            stats: {},
            types: [],
            weight: Math.round(responsePokemon.weight / 10)
          };

          responsePokemon.abilities.map(ability => {
            result.abilities.push(ability.ability.name);
          });

          responsePokemon.moves.map(move => {
            result.moves.push(move.move.name);
          });

          responsePokemon.stats.map(stat => {
            switch (stat.stat.name) {
              case "speed":
                result.stats.speed = stat.base_stat;
                break;
              case "special-defense":
                result.stats.specialDefense = stat.base_stat;
                break;
              case "special-attack":
                result.stats.specialAttack = stat.base_stat;
                break;
              case "defense":
                result.stats.defense = stat.base_stat;
                break;
              case "attack":
                result.stats.attack = stat.base_stat;
                break;
              case "hp":
                result.stats.hp = stat.base_stat;
                break;
              default:
                break;
            }
          });

          responsePokemon.types.map(type => {
            result.types.push(type.type.name);
          });

          commit("setPokemon", result);

          return result;
        },
        error => {
          dispatch("alert/error", error, { root: true });

          return error;
        }
      );
    },
    async getPokemons({ commit, dispatch }, data) {
      await pokemonService.getPokemons(data).then(
        response => {
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
