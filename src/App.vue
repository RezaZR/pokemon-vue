<template lang="pug">
  #app
    HeaderModule
    Modal(v-if="isOpen" :pokemon="data" :contentFor="contentFor")
    router-view
</template>

<script>
import HeaderModule from "@/components/HeaderModule";
import Modal from "@/components/Modal";

export default {
  name: "app",
  components: {
    HeaderModule,
    Modal
  },
  computed: {
    isOpen() {
      return this.$store.state.modal.isOpen;
    },
    contentFor() {
      return this.$store.state.modal.contentFor;
    },
    data() {
      return this.$store.state.modal.data;
    }
  }
};
</script>

<style lang="scss">
html {
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
body {
  width: 100%;
  background-color: $white;
  margin: 0;
  padding: 0;
  font-family: $primary-font;
  line-height: 1.5;
  letter-spacing: 0.05em;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow-x: hidden;
  overscroll-behavior-y: none;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
}
</style>
