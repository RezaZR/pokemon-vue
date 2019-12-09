<template lang="pug">
  .details aaa
</template>

<script>
export default {
  name: "details",
  created() {
    this.getData(this.$route.params.url);
  },
  computed: {
    pokemon() {
      return this.$store.state.pokemon.pokemon;
    }
  },
  methods: {
    getData(url) {
      this.$store.dispatch("getPokemon", { url: url });
    }
  }
};
</script>
