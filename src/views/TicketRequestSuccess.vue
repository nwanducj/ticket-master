<template>
  <div class="main">
    <div class="express">
      <div>Enter your email and we’ll send your tickets right away!</div>
    </div>
    <div class="card">
      <svg
        width="137"
        height="137"
        viewBox="0 0 137 137"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M125.583 63.2476V68.4993C125.576 80.8089 121.59 92.7864 114.22 102.646C106.849 112.505 96.4894 119.717 84.685 123.207C72.8806 126.698 60.2642 126.278 48.7174 122.013C37.1707 117.747 27.3122 109.862 20.6124 99.5359C13.9126 89.2093 10.7303 76.9937 11.5402 64.7108C12.3502 52.4279 17.1089 40.7358 25.1067 31.3784C33.1045 22.021 43.9128 15.4996 55.9197 12.7868C67.9267 10.074 80.4889 11.3151 91.7328 16.3251"
          stroke="#F5A623"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M125.583 22.8335L68.5 79.9739L51.375 62.8489"
          stroke="#F5A623"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="desc">
        Your tickets have been confirmed and sent to your email address at
        <a href="#">ted@flutterwave.com</a>
      </div>
      <button type="submit">BUY MORE TICKETs</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Ticket Request Success",
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
  padding: 70px 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #aaaaaa;
  text-align: center;
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
