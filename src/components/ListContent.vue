<template lang="pug">
  div(v-if="contentFor === 'home'")
    .list__content(@click="goToPokemonDetails(pokemon.url)")
      .list__content__wrapper(:title="`Go to ${ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) } details`") {{ pokemon.name }}
      .list__content__wrapper(:title="`You own ${ pokemon.owned } ${ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }`") {{ pokemon.owned }}
  div(v-else-if="contentFor === 'my_pokemon'")
    .list__content(@click="goToPokemonDetails(pokemon.url)")
      .list__content__wrapper(:title="`Go to ${ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) } details`") {{ pokemon.name }}
      .list__content__wrapper(:title="`The nickname of this pokemon is ${ pokemon.nickname.charAt(0).toUpperCase() + pokemon.nickname.slice(1) }`") {{ pokemon.nickname }}
</template>

<script>
export default {
  name: "list_content",
  props: {
    pokemon: {
      type: Object,
      required: true
    },
    contentFor: {
      type: String,
      required: true
    }
  },
  methods: {
    goToPokemonDetails(url) {
      this.$router.push({
        name: "details",
        params: { name: this.pokemon.name }
      });
    }
  }
};
</script>
