<template>
  <button @click="$emit('buttonClicked')">{{ text }}</button>
</template>
<script>
export default {
  name: "TextButton",
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
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  margin: 0 38px;
  border: 0;
  letter-spacing: 0.508366px;
  color: #333333;
}
button:hover {
  background-color: #f5a623;
}
</style>