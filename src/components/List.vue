<template lang="pug">
  div(v-if="contentFor === 'home'")
    .list(v-if="pokemons && pokemons === null")
      .spinner
    .list(v-else-if="pokemons && pokemons !== null")
      .list__header
        .list__header__wrapper Pokemon Name
        .list__header__wrapper You Own
      ListContent(:pokemon="pokemon" :contentFor="contentFor" v-for="(pokemon, index) in pokemons.results" v-bind:key="pokemon.name")
      
      .list__footer
        Pagination(:url="pokemons.previous" :title="'Previous'")
        Pagination(:url="pokemons.next" :title="'Next'")
  div(v-else-if = "contentFor === 'my_pokemon'")
    .list
      .list__header
        .list__header__wrapper Pokemon Name
        .list__header__wrapper Nickname
      ListContent(:pokemon="datum" :contentFor="contentFor" v-for="(datum, index) in data" v-bind:key="datum.name")
</template>

<script>
import ListContent from "@/components/ListContent";
import Pagination from "@/components/Pagination";

export default {
  name: "list",
  props: {
    perPage: {
      type: Number,
      required: false,
      default: 20
    },
    contentFor: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: false,
      default: null
    }
  },
  components: {
    ListContent,
    Pagination
  },
  mounted() {
    this.getData();
  },
  computed: {
    myPokemonList() {
      return this.$store.state.pokemon.myPokemonList;
    },
    pokemons() {
      return this.$store.state.pokemon.pokemons;
    }
  },
  methods: {
    getData() {
      this.$store.dispatch("getPokemons", {
        limit: this.perPage,
        isInitialData: true
      });
    }
  }
};
</script>

<style lang="scss">
.list {
  color: $black;
  &__header,
  &__content,
  &__footer {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    &__wrapper {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 50%;
      flex: 0 0 50%;
    }
  }
  &__header {
    background-color: $primary-color;
    font-weight: 700;
    color: $white;
    padding: 0.5em;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
  }
  &__content {
    padding: 0.5em;
    cursor: pointer;
    &:nth-child(odd) {
      background-color: $white-blueish;
    }
    &:nth-child(even) {
      background-color: $white;
    }
    &:hover {
      font-weight: 700;
    }
    &__wrapper {
      text-transform: capitalize;
    }
  }
  &__footer {
    display: flex;
    justify-content: center;
    margin-top: 1em;
    & .pagination {
      margin-top: 2em;
      & button {
        width: 100%;
      }
      &:nth-child(1) {
        margin-right: 1em;
      }
    }
  }
}
</style>
