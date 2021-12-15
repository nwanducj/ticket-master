<template>
  <button @click="$emit('buttonClicked')">{{ text }}</button>
</template>
<script>
export default {
  name: "BaseButton",
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
  background-color: black;
  color: white;
  border: 0;
  height: 50px;
  width: 348px;
  padding: 0 16px;
  border-radius: 4.07px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0.5083656907081604px;
  box-shadow: 0px 1.0167313814163208px 1.0167313814163208px 0px #00000080;
}
</style>