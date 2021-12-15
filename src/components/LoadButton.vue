<template>
  <button @click="$emit('buttonClicked')">{{ text }}</button>
</template>
<script>
export default {
  name: "LoadButton",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  background-color: #000000;
  color: white;
  border: 0;
  /* height: 36.6px; */
  padding: 15px 30px;
  margin: 25px 0;
  border-radius: 4.07px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0.5083656907081604px;
  box-shadow: 0px 1.0167313814163208px 1.0167313814163208px 0px #00000080;
}
</style>