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
  width: 100vw;
  margin: 0;
}
.header {
  width: 81.5%;
  margin: 0 auto;
}
.footer {
  width: 83%;
  margin: 0 auto 100px auto;
  position: absolute;
  left: 10%;
}
</style>