<template>
  <div id="default">
    <DesktopHeader class="header" />
    <main>
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
  background-color: #f2f2f2;
  height: 100%;
  width: 100%;
}

.header {
  width: 81.5%;
  margin: 0 auto;
}
// .footer {
//   width: 83%;
//   margin: 0 auto 0 auto;
//   position: absolute;
//   left: 10%;
//   bottom: 0;
// }
</style>
