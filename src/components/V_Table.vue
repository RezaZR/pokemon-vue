<template lang="pug">
  table(v-if="pokemons[0]")
    tr
      th Pokemon Name
      th You Own
    tr(v-for="pokemon in pokemons[0].results")
      td {{ pokemon.name }}
      td 0
</template>

<script>
export default {
  name: "v_table",
  props: {
    perPage: {
      type: Number,
      required: false,
      default: 10
    }
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
}
</script>
