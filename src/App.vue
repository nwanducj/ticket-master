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
import Payment from "@/layouts/payment";

export default {
  data() {
    return {};
  },
  components: {
    Default,
    Payment,
  },
  computed: {
    layout() {
      console.log(this.$route.meta.layout);
      return this.$route.meta.layout || DefaultLayout;
    },
  },
};
</script>
<style lang="scss">
#app {
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: #f2f2f2;
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