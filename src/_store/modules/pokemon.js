import { pokemonService } from "@/_services";

export const pokemon = {
  state: {
    pokemon: null,

    pokemons: null,
    isPokemonsFilled: false,

    myPokemonList: JSON.parse(localStorage.getItem("myPokemonList") || "[]"),

    isLoading: false
  },
  getters: {},
  actions: {
    getPokemon({ commit, dispatch }, data) {
      pokemonService.getPokemon(data).then(
        response => {
          let result = {
            abilities: [],
            height: response.height * 10,
            moves: [],
            name: data.name,
            picture: response.sprites.front_default,
            stats: {},
            types: [],
            weight: Math.round(response.weight / 10)
          };

          response.abilities.map(ability => {
            result.abilities.push(ability.ability.name);
          });

          response.moves.map(move => {
            result.moves.push(move.move.name);
          });

          response.stats.map(stat => {
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

          response.types.map(type => {
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
    async getPokemons({ commit, dispatch, state }, data) {
      await pokemonService.getPokemons(data).then(
        response => {
          response.results.map(pokemon => {
            pokemon.owned = 0;
            if (state.myPokemonList !== []) {
              state.myPokemonList.forEach(myPokemon => {
                if (pokemon.name === myPokemon.name) {
                  pokemon.owned++;
                }
              });
            }
          });
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
    },
    setMyPokemonList(state, value) {
      console.log(value);
      state.myPokemonList.push(value);
      localStorage.setItem(
        "myPokemonList",
        JSON.stringify(state.myPokemonList)
      );
    }
  }
};
