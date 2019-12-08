<template lang="pug">
  .list(v-if="pokemons && pokemons !== null")
    .list__header
      .list__header__wrapper Pokemon Name
      .list__header__wrapper You Own
    ListContent(:pokemon="pokemon" v-for="(pokemon, index) in pokemons.results" v-bind:key="pokemon.name")
    .container-fluid
      .row
        .col-4
        .col-2
          Pagination(:url="pokemons.previous" :title="'Previous'")
        .col-2
          Pagination(:url="pokemons.next" :title="'Next'")
        .col-4
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
      default: 10
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
    pokemons() {
      return this.$store.state.pokemon.pokemons;
    }
  },
  methods: {
    getData() {
      this.$store.dispatch("getPokemons", { limit: this.perPage });
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
      width: 50%;
      &:nth-child(2) {
        padding: 0 calc(0.5em + 15px);
      }
    }
  }
  &__header {
    background-color: $primary-color;
    font-weight: 700;
    padding: 0.5em;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
  }
  &__content {
    padding: 0.5em;
    &:nth-child(odd) {
      background-color: $white-blueish;
    }
    &:nth-child(even) {
      background-color: $white;
    }
    &:last-child {
      border-bottom-left-radius: 9px;
      border-bottom-right-radius: 9px;
    }
    &__wrapper {
      &:nth-child(1) {
        text-transform: capitalize;
      }
    }
  }
}
</style>
