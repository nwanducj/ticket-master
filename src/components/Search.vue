<template>
  <div class="input-field">
    <img src="@/assets/images/search.svg" alt="" />
    <input type="text" placeholder="Search events" />
  </div>
</template>
<script>
export default {
  name: "Search",
};
</script>
<style lang="scss" scoped>
::placeholder {
  font-size: 0.95rem;
}
.input-field {
  position: relative;
  border-bottom: 1px grey solid;
  display: block;
  height: 29px;
  width: 100%;
}
img {
  position: absolute;
}
input {
  border: 0;
  margin-left: 20px;
  background-color: #f2f2f2;
}
input:focus {
  outline: none;
}
</style>