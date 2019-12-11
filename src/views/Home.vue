<template lang="pug">
  .home
    .container
      .row
        .col-12
          List(:perPage="20" :contentFor="'home'")
</template>

<script>
import List from "@/components/List";

export default {
  name: "home",
  components: {
    List
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
  margin: 2em 0;
}
</style>
