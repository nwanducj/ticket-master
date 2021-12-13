<template>
  <button @click="$emit('buttonClicked')">
    <i :class="name"></i>
  </button>
</template>
<script>
export default {
  name: "IconButton",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  border: 0;
}
</style>