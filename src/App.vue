<template>
  <div>
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
.card {
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 10px;
  width: 80%;
  padding: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
  margin: 0 auto;

  &--center {
    text-align: center;
  }
  @media screen and (min-width: 786px) {
    padding: 50px;
    width: 470px;
  }
}
</style>