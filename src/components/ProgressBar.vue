<template lang="pug">
  .progress(:title="value + '%'")
    .progress__bar(:style="{ width: `${value}%` }")
    p {{ value }}%
</template>

<script>
export default {
  name: "progress_bar",
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      styledSpinner: {
        width: this.value
      }
    };
  },
  computed: {
    width: {
      get() {
        const result = {
          width: this.value
        };
        return result;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.progress {
  width: 100%;
  height: 25px;
  border-radius: 12px;
  background-color: $white-blueish;
  position: relative;
  &__bar {
    height: 100%;
    border-radius: 12px;
    background-color: $primary-color;
  }
  & p {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    font-size: $font-sm;
    color: $white;
  }
}
</style>
