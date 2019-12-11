<template lang="pug">
  div(v-if="pokemon === null")
    .spinner
  div(v-else)
    .details
      .details__header
        button#button-back.button.button--grey.button--radius-6(@click="goBack") Back
        p.text-truncate(:title="name") {{ name }}
        button#button-catch.button.button--primary-color.button--radius-6(@click="openModal") Catch!
      .details__body
        img(:src="pokemon.picture")
        .details__body__stats
          .details__body__stats__wrapper.details__body__stats__wrapper--1
            span HP: 
            ProgressBar(:value="pokemon.stats.hp")
          .details__body__stats__wrapper.details__body__stats__wrapper--2
            span Speed: 
            ProgressBar(:value="pokemon.stats.speed")
          .details__body__stats__wrapper.details__body__stats__wrapper--3
            span Defense: 
            ProgressBar(:value="pokemon.stats.defense")
          .details__body__stats__wrapper.details__body__stats__wrapper--4
            span Attack: 
            ProgressBar(:value="pokemon.stats.attack")
          .details__body__stats__wrapper.details__body__stats__wrapper--5
            span Special Defense: 
            ProgressBar(:value="pokemon.stats.specialDefense")
          .details__body__stats__wrapper.details__body__stats__wrapper--6
            span Special Attack: 
            ProgressBar(:value="pokemon.stats.specialAttack")
        .details__body__height-and-weight
          span Height: {{ pokemon.height }} cm&nbsp;
          span Weight: {{ pokemon.weight }} kg
      .details__footer
        .details__footer__content
          .details__footer__content__title Abilities ({{ pokemon.abilities.length }})
          .details__footer__content__wrapper
            span(v-for="pokemonAbility in pokemon.abilities") {{ pokemonAbility }}
        .details__footer__content
          .details__footer__content__title Types ({{ pokemon.types.length }})
          .details__footer__content__wrapper
            span(v-for="pokemonType in pokemon.types") {{ pokemonType }}
        .details__footer__content
          .details__footer__content__title Moves ({{ pokemon.moves.length }})
          .details__footer__content__wrapper
            span(v-for="pokemonMove in pokemon.moves") {{ pokemonMove }}
    
</template>

<script>
import ProgressBar from "@/components/ProgressBar";

export default {
  name: "pokemon_details",
  components: {
    ProgressBar
  },
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
    },
    goBack() {
      this.$router.go(-1);
    },
    openModal() {
      this.$store.commit("setIsOpen");
      this.$store.commit("setContentFor", "catch_pokemon");
      this.$store.commit("setData", this.pokemon);
    }
  }
};
</script>

<style lang="scss" scoped>
.details {
  @extend .container;
  margin: 2em auto;
  &__header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    & #button-back {
      width: 20%;
      margin-right: 15px;
    }
    & p {
      font-size: $font-lg;
      font-weight: 700;
      color: $black;
      text-transform: capitalize;
      text-align: center;
      width: calc(60% - 30px);
    }
    & #button-catch {
      width: 20%;
      margin-left: 15px;
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
    &__stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-template-areas:
        "stats1 stats2"
        "stats3 stats4"
        "stats5 stats6";
      grid-gap: 1em;
      height: 200px;
      align-items: center;
      &__wrapper {
        &--1 {
          grid-area: stats1;
        }
        &--2 {
          grid-area: stats2;
        }
        &--3 {
          grid-area: stats3;
        }
        &--4 {
          grid-area: stats4;
        }
        &--5 {
          grid-area: stats5;
        }
        &--6 {
          grid-area: stats6;
        }
        & span {
          font-size: $font-md;
        }
      }
    }
    &__height-and-weight {
      grid-area: heightAndWeight;
      text-align: center;
      font-size: $font-md;
      color: $black;
      display: flex;
      align-items: center;
      justify-content: center;
      & span {
        display: inline-block;
        &:nth-child(1) {
          margin-right: 0.25em;
        }
      }
    }
  }
  &__footer {
    margin-top: 2em;
    &__content {
      display: flex;
      width: 100%;
      flex-direction: column;
      margin-bottom: 1em;
      &__title {
        font-size: $font-lg;
        font-weight: 700;
        margin-bottom: 0.5em;
      }
      &__wrapper {
        display: flex;
        flex-wrap: wrap;
        & span {
          display: inline-block;
          padding: 0.5em 1em;
          background-color: $white-blueish;
          border-radius: 6px;
          margin: 0.5em 0;
          &:not(:last-child) {
            margin-right: 0.5em;
          }
        }
      }
    }
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {
  .details {
    &__header {
      & #button-back {
        width: 30%;
        margin-right: 7px;
      }
      & p {
        width: calc(40% - 14px);
      }
      & #button-catch {
        width: 30%;
        margin-left: 7px;
      }
    }
    &__body {
      height: 450px;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      grid-template-areas:
        "image"
        "image"
        "image"
        "heightAndWeight"
        "stats";
    }
  }
}
</style>
