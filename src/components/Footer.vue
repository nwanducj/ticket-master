<template>
  <footer class="flex">
    <div class="terms">Copyright 2019. Flutterwave inc</div>
    <div class="terms">
      <div>Terms and condition</div>
      <div class="policy">Policy Privacy</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>


<style scoped lang="scss">
.flex {
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  padding-top: 30px;

  .terms {
    display: flex;
  }
  .policy {
    margin: 0 0 0 48px;
  }
}
</style>