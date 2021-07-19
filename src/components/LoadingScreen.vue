<template>
  <div
    class="loading__holder"
    style="
      position: fixed;
      height: 10vh;
      width: 100vw;
      background-color: #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0;
    "
  >
    <div id="loading"></div>
  </div>
</template>

<script>
</script>
<style lang="scss" scoped>
body {
  margin-top: 100px;
  background-color: #137b85;
  color: #fff;
  text-align: center;
}

h1 {
  font: 2em "Roboto", sans-serif;
  margin-bottom: 40px;
}

#loading {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #f5a623;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
