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
  position: relative;
  margin: 0;
  min-height: 100vh;
}
a {
  color: black;
}
button {
  border: 0;
  background-color: #f2f2f2;
}
.wrapper {
  width: 81.5%;
  margin: 0 auto;
}
footer {
  width: 81.25%;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  right: 10px;
  left: 10px;
}
</style>