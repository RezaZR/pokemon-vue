<template lang="pug">
  .modal
    .modal__content(v-if="contentFor === 'catch_pokemon'")
      .modal__content__header {{ pokemon.name }}
      .modal__content__body
        img(:src="pokemon.picture")
      .modal__content__footer
        button.button.button--grey.button--radius-6(@click="closeModal") Cancel
        button.button.button--primary-color.button--radius-6(@click="catchPokemon")
          Pokemon
          p Catch!
    .modal__content(v-if="contentFor === 'success'")
      .modal__content__body
        p Congratulations! You captured {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}. Give it a nickname:
        input(v-model="nickname" type="text" required="required")
      .modal__content__footer
        button.button.button--grey.button--radius-6(@click="giveNickname") Apply
    .modal__content(v-if="contentFor === 'failure'")
      .modal__content__body
        p You failed to capture {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}, please try again.
      .modal__content__footer
        button.button.button--grey.button--radius-6(@click="closeModal") Close
        button.button.button--primary-color.button--radius-6(@click="catchPokemon")
          Pokemon
          p Catch!
</template>

<script>
import Pokemon from "@/assets/pokemon";

export default {
  name: "modal",
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
  data() {
    return {
      nickname: ""
    };
  },
  components: {
    Pokemon
  },
  computed: {
    myPokemonList() {
      return this.$store.state.pokemon.myPokemonList;
    }
  },
  methods: {
    closeModal() {
      this.$store.commit("setIsOpen");
      this.$store.commit("setContentFor", null);
      this.$store.commit("setData", null);
    },
    catchPokemon() {
      const catchResult = Math.random();

      this.closeModal();

      setTimeout(() => {
        this.$store.commit("setIsOpen");
        if (catchResult >= 0.5) {
          this.$store.commit("setContentFor", "success");
        } else {
          this.$store.commit("setContentFor", "failure");
        }
        this.$store.commit("setData", this.pokemon);
      }, 750);
    },
    giveNickname() {
      this.$store.commit("setMyPokemonList", {
        name: this.pokemon.name,
        nickname: this.nickname
      });

      this.closeModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: $black-050;
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $white;
    width: 30%;
    box-shadow: $shadow-bottom-35-black;
    padding: 1em;
    border-radius: 12px;
    &__header {
      font-size: $font-lg;
      font-weight: 700;
      text-transform: capitalize;
      padding-bottom: 0.5em;
      border-bottom: 1px solid $grey;
    }
    &__body {
      & img {
        display: block;
        margin: 0 auto;
        width: 40%;
      }
      & p {
        font-size: $font-xl;
        text-align: center;
        color: $black;
        margin-bottom: 1em;
      }
      & input {
        width: 100%;
        padding: 0.5em 1em;
        font-size: $font-lg;
        color: $white;
        background-color: $black;
        border-radius: 6px;
      }
    }
    &__footer {
      display: flex;
      justify-content: center;
      margin-top: 1em;
      & button {
        &:nth-child(1) {
          margin-right: 1em;
        }
      }
    }
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (orientation: portrait) {
  .modal {
    &__content {
      width: 90%;
    }
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (orientation: landscape) {
  .modal {
    &__content {
      width: 50%;
    }
  }
}
</style>
