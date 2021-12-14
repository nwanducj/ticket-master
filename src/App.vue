<template>
  <div id="nav">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
const DefaultLayout = "default";
import Default from "@/layouts/default";

export default {
  data() {
    return {};
  },
  components: {
    Default,
  },
  computed: {
    layout() {
      return this.$route.meta.layout || DefaultLayout;
    },
  },
  created() {
    this.$store.dispatch("getUser");
  },
};
</script>
<style lang="scss">
#app {
  box-sizing: border-box;
  position: relative;
  margin: 0;
  min-height: 100vh;
}
a {
  color: black;
}
ul {
  list-style: none;
  padding: 0;
}
button {
  border: 0;
  background-color: #f2f2f2;
}
.wrapper {
  width: 86%;
  margin: 0 auto;
}
button:hover {
  cursor: pointer;
}
</style>