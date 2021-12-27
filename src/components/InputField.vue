<template>
  <div>
    <label for="email address" class="label">{{ label }}</label>
    <input type="text" v-model="word" @change="$emit('get', word)" required />
  </div>
</template>
<script>
export default {
  name: "InputField",
  props: {
    label: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      word: this.text,
    };
  },
};
</script>
<style lang="scss" scoped>
input {
  box-sizing: border-box;
  background: #fdfdfd;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  padding: 10px 20px;
  text-rendering: auto;
  display: inline;
  width: 100%;
  @media screen and(min-width:768px) {
    width: 100%;
  }
}
div {
  width: 100%;
  margin: 25px 0;
}
label {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-align: left;
  margin: 10px 0;
  display: block;
}
input:focus {
  outline: none;
}
</style>