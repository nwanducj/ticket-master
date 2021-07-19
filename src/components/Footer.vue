<template>
  <footer class="flex">
    <div class="terms">Copyright 2019. Flutterwave inc</div>
    <div class="terms">
      <a>Terms and condition</a>
      <a class="policy">Policy Privacy</a>
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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
  padding-top: 30px;

  .terms {
    display: flex;
    margin: 20px 0 0 0;
  }
  .policy {
    margin: 0px 0 0 40px;
  }
}
@media screen and (min-width: 768px) {
  .flex {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding-bottom: 30px;
    padding-top: 30px;

    .terms {
      display: flex;
      margin: 0px 0 0 0;
    }
    .policy {
      margin: 0 0 0 48px;
    }
  }
}
</style>