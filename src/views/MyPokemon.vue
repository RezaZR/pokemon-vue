<template lang="pug">
  .home
    .container
      .row
        .col-12
          List(:perPage="1000" :data="myPokemonList" :contentFor="'my_pokemon'")
</template>

<script>
import List from "@/components/List";

export default {
  name: "my_pokemon",
  components: {
    List
  },
  computed: {
    myPokemonList() {
      return this.$store.state.pokemon.myPokemonList;
    }
  }
};
</script>
