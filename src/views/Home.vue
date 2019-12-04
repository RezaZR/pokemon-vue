<template lang="pug">
  .home
    .container
      .row
        .col-12
          V_Table(:perPage="20")
</template>

<script>
import V_Table from "@/components/V_Table"

export default {
  name: "home",
  components: {
    V_Table
  }
};
</script>

<style lang="scss" scoped>
</style>