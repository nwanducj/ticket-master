<template>
  <div style="height: 78vh" v-if="!success">
    <div class="main">
      <div class="express">
        <div>Enter your email and we’ll send your tickets right away!</div>
      </div>
      <div class="card">
        <label for="email address" class="label">Email address</label>
        <input type="text" id="email address" />
        <button type="submit" @click="pay">PAY N110,000</button>
      </div>
    </div>
  </div>
  <TicketSentSuccess v-if="success" />

  <!-- <svg
    style="
      position: absolute;
      left: 31.46%;
      top: 70px;
      right: -100px;
      left: 37%;
      bottom: 0;
      mix-blend-mode: normal;
      opacity: 0.5;
      z-index: 1;
      height: 100vh;
      widht: 100vw;
    "
    width="100%"
    height="100%"
    viewBox="0 0 988 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.4999">
      <path
        d="M1.5 1032.5L1600.43 -535.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M10.5 1039.5L1609.43 -528.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M19.5 1046.5L1618.43 -521.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M28.5 1053.5L1627.43 -514.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M37.5 1060.5L1636.43 -507.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M46.5 1067.5L1645.43 -500.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M55.5 1074.5L1654.43 -493.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M64.5 1081.5L1663.43 -486.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M73.5 1088.5L1672.43 -479.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M82.5 1095.5L1681.43 -472.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M91.5 1102.5L1690.43 -465.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M100.5 1109.5L1699.43 -458.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M109.5 1116.5L1708.43 -451.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M118.5 1123.5L1717.43 -444.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M127.5 1130.5L1726.43 -437.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M136.5 1137.5L1735.43 -430.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M145.5 1144.5L1744.43 -423.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M154.5 1151.5L1753.43 -416.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M163.5 1158.5L1762.43 -409.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M172.5 1165.5L1771.43 -402.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M181.5 1172.5L1780.43 -395.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M190.5 1179.5L1789.43 -388.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M199.5 1186.5L1798.43 -381.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M208.5 1193.5L1807.43 -374.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M217.5 1200.5L1816.43 -367.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M226.5 1207.5L1825.43 -360.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M235.5 1214.5L1834.43 -353.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M244.5 1221.5L1843.43 -346.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M253.5 1228.5L1852.43 -339.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M262.5 1235.5L1861.43 -332.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M271.5 1242.5L1870.43 -325.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M280.5 1249.5L1879.43 -318.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M289.5 1256.5L1888.43 -311.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M298.5 1263.5L1897.43 -304.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M307.5 1270.5L1906.43 -297.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M316.5 1277.5L1915.43 -290.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M325.5 1284.5L1924.43 -283.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
      <path
        d="M334.5 1291.5L1933.43 -276.719"
        stroke="#F5A623"
        stroke-linecap="square"
      />
    </g>
  </svg> -->
</template>

<script>
import TicketSentSuccess from "../components/TicketSentSuccess.vue";
// @ is an alias to /src
export default {
  name: "Ticket Request",
  components: { TicketSentSuccess },
  data() {
    return {
      success: false,
    };
  },
  methods: {
    pay: function () {
      this.success = true;
    },
  },
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
