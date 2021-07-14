<template>
  <div style="height: 78vh">
    <div class="main">
      <div class="express">
        <div>Enter your email and we’ll send your tickets right away!</div>
      </div>
      <div class="card">
        <label for="email address" class="label">Email address</label>
        <input type="text" id="email address" />
        <button type="submit">PAY N110,000</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Ticket Request",
  components: {},
};
</script>
<style lang="scss" scoped>
.main {
  padding: 40px 0;
}
.express > div {
  display: inline;
  padding: 0 30%;
  width: 25%;
  text-align: center;
}
.express {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  font-size: 1.2rem;
  font-weight: bold;
}
button {
  background-color: #faa800;
  border: none;
  color: white;
  padding: 13px 16px 13px 16px;
  width: 100%;
  height: 36.6px;
  font-size: 12.2px;
  line-height: 14.64px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 4.06px;
  letter-spacing: 0.51px;
  box-shadow: 0px 1.0167313814163208px 1.0167313814163208px 0px #00000080;
}
input {
  outline: none;
  border: none;
  background-color: lighten(#f2f2f2, 3);
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: 2px 0px 10px 0px;
  border: 1px solid darken(#f2f2f2, 10);
}
.card {
  width: 25%;
  margin: 0px auto;
  background-color: white;
  height: 100%;
  padding: 50px 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;
}
.label {
  font-size: 0.9rem;
  color: #333333;
}
</style>
