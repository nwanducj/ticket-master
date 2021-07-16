<template>
  <div id="">
    <DesktopHeader class="header" />
    <main id="default">
      <slot />
    </main>
    <Footer class="footer" />
  </div>
</template>

<script>
import DesktopHeader from "@/components/DesktopHeader.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return { show: true };
  },
  components: {
    DesktopHeader,
    Footer,
  },
  created() {},
};
</script>
<style lang="scss" scoped>
#default {
  background-color: red;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
#default::-webkit-scrollbar {
  display: none;
}

.header {
  width: 81.5%;
  overflow: hidden;
  margin: 0 auto;
}
.footer {
  overflow: hidden;
}
</style>
