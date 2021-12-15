<template>
  <div>
    <slot></slot>
    <footer>
      <p>Copyright 2019. Flutterwave Inc</p>
      <span>
        <ul>
          <li><a href="#">Terms and condition</a></li>
          <li><a href="#" class="policy">Policy Privacy</a></li>
        </ul>
      </span>
    </footer>
  </div>
</template>
<script>
export default {
  name: "overlay",
};
</script>
<style lang="scss" scoped>
div {
  background-repeat: no-repeat;
  /* background-position: 100% 10%; */
  background-position: 100%;
  background-size: contain;
  width: 100%;
  min-height: 90vh;
  @media screen and (min-width: 768px) {
    background-image: url("../assets/images/Lines.png");
  }
}

footer {
  display: block;
  width: 90%;
  margin: 100px auto 0px auto;
  ul {
    li {
      margin-top: 20px;
    }
  }
  a {
    display: block;
  }
  @media screen and (min-width: 660px) {
    display: flex;
    width: 81.25%;
    justify-content: space-between;
    ul {
      display: flex;
      :last-child {
        margin-left: 20px;
      }
      li {
        margin-top: 0px;
      }
    }
  }
}
</style>