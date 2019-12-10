<template lang="pug">
  .details
    .details__header
      button#button-back Back
      p {{ name }}
      button#button-catch Catch!
    .details__body
      img(:src="pokemon.picture")
      div
      .details__body__height-and-weight
        span Height: {{ pokemon.height }} cm&nbsp;
        span Weight: {{ pokemon.weight }} kg
</template>

<script>
export default {
  name: "pokemon_details",
  data() {
    return {
      name: ""
    };
  },
  created() {
    this.name = this.$route.params.name;
    this.getData(this.name);
  },
  beforeDestroy() {
    this.$store.commit("setPokemon", null);
  },
  computed: {
    pokemon() {
      return this.$store.state.pokemon.pokemon;
    }
  },
  methods: {
    getData(name) {
      this.$store.dispatch("getPokemon", { name: name });
    }
  }
};
</script>

<style lang="scss" scoped>
.details {
  @extend .container;
  &__header {
    display: grid;
    grid-template-columns: auto 80% auto;
    grid-template-rows: auto;
    grid-template-areas: "button-back name button-catch";
    & #button-back {
      grid-area: button-back;
    }
    & p {
      font-size: $black;
      text-transform: capitalize;
    }
    & #button-catch {
      grid-area: button-catch;
    }
  }
  &__body {
    height: 200px;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-areas:
      "image stats"
      "image stats"
      "image stats"
      "heightAndWeight stats";
    & img {
      grid-area: image;
      margin: auto;
      height: 100%;
    }
    &__height-and-weight {
      grid-area: heightAndWeight;
      text-align: center;
      font-size: $font-md;
      color: $black;
    }
  }
}
</style>
