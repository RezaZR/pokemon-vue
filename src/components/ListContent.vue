<template lang="pug">
  .list__content
    .list__content__wrapper {{ pokemon.name }}
    .list__content__wrapper 0
</template>

<script>
export default {
  name: "list_content",
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  }
}
</script>
