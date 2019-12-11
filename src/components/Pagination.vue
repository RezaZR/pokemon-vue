<template lang="pug">
  .pagination(v-if="url === null")
    button.button.button--grey.button--radius-6(disabled="disabled") {{ title }}
  .pagination(v-else)
    button.button.button--grey.button--radius-6(@click="handlePagination") {{ title }}
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
