<template lang="pug">
  .list__content(@click="goToPokemonDetails(pokemon.url)")
    .list__content__wrapper(:title="`Go to ${ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) } details`") {{ pokemon.name }}
    .list__content__wrapper(:title="`You own 0 ${ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }`") 0
</template>

<script>
export default {
  name: "list_content",
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToPokemonDetails(url) {
      this.$router.push({
        name: "details",
        params: { name: this.pokemon.name, url: url }
      });
    }
  }
};
</script>
