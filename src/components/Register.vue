<template>
  <div
    style="
      width: 100vw;
      z-index: 50;
      position: fixed;
      top: 0;
      height: 100vh;
      padding: auto 0;
    "
  >
    <div class="main">
      <!-- <div class="express">
          <div>Enter your email and we’ll send your tickets right away!</div>
        </div> -->
      <div class="card">
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.8rem;
          "
        >
          <div>REGISTER FOR FREE</div>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <svg
          width="100%"
          height="1"
          viewBox="0 0 368 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="0.5" x2="368" y2="0.5" stroke="#BDBDBD" />
        </svg>

        <div style="margin-top: 20px">
          <div class="desc">
            <form>
              <label for="full name" class="label">Full name</label>
              <input type="text" id="full name" />
              <label for="email address" class="label">Email address</label>
              <input type="text" id="email address" />
              <label for="phone number" class="label">Phone number</label>
              <input type="text" id="phone number" />
            </form>
          </div>
          <button type="submit">REGISTER</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {};
  },
};
</script>


<style scoped lang="scss">
.main {
  display: flex;
  align-items: center;
  justify-items: center;
}
.express > div {
  display: inline;
  padding: 0 30%;
  width: 40%;
  text-align: end;
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
  padding: 30px 30px 50px 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #aaaaaa;
  text-align: start;
  box-shadow: 0px 4px 4px 0px #00000040;
}
.desc {
  margin: 15px 0;
}
.label {
  font-size: 0.9rem;
  color: #333333;
}
a {
  color: darken(lightblue, 30);
  text-decoration: none;
}
</style>