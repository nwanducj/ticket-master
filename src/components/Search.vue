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
  width: 218px;
  border-bottom: 1px grey solid;
  display: inline;
  height: 29px;
}
img {
  position: absolute;
}
input {
  border: 0;
  margin-left: 20px;
  background-color: #f2f2f2;
  margin-bottom: 15px;
}
input:focus {
  outline: none;
  border: 0;
  /* border-bottom: 1px grey solid; */
}
</style>