<template>
  <div class="div" style="width: 80vw; background-color: red">
    <div style="display: block" v-for="(event, i) in events" :key="i">
      <div style="background-color: pink">.</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Photogrid",
  props: ["events"],
};
</script>
<style scoped lang="scss">
.div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 0px;
}
</style>