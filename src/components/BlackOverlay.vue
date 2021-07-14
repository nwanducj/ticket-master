<template>
  <div class="overlay"></div>
</template>

<script>
export default {
  name: "BlackOverlay",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.overlay {
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.8;
}
</style>
