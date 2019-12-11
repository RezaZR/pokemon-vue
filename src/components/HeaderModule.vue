<template lang="pug">
  .header
    .header__content
      router-link(to='/')
        p Home
      router-link(to='/my_pokemon')
        p My Pokemon List
</template>

<script>
export default {
  name: "header_module"
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 1em;
  background-color: $primary-color;
  &__content {
    width: 100%;
    display: block;
    margin: 0 auto;
    & p {
      font-size: $font-lg;
      color: $white;
      display: inline-block;
      &:nth-child(1) {
        margin-right: 1em;
      }
    }
  }
}
</style>
