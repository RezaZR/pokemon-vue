<template lang="pug">
  div(v-if="url === null")
    button(disabled="disabled") {{ title }}
  div(v-else)
    button(@click="handlePagination") {{ title }}
</template>

<script>
export default {
  name: "pagination",
  props: {
    url: {
      type: String
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    handlePagination(e) {
      this.getData();
    },
    getData() {
      this.$store.dispatch("getPokemons", {
        url: this.url,
        isInitialData: false
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
