<template>
  <div v-if="!loading">
    <div style="position: relative; height: 100vh; z-index: 2">
      <div class="side">
        <div class="side__one">
          <div class="side__one__date">8th February 2019</div>
          <div class="side__one__title">{{ event.name }}</div>
          <div class="side__one__desc">
            {{ event.description }}
          </div>
          <div class="side__one__price">N5000 - N200,000</div>
          <div v-if="false" class="side__one__price free">FREE</div>
          <button @click="gotoPayment">BUY NOW</button>
          <button v-if="false" @click="gotoPayment">REGISTER FOR FREE</button>
        </div>
        <div class="side__two">
          <img
            :src="event.image || '@/assets/images/Event-image-1.png'"
            :alt="event.tags"
          />
        </div>
      </div>
      <svg
        class="line"
        width="100%"
        height="1"
        viewBox="0 0 941 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0.5H940.358" stroke="#CCB7B1" stroke-linecap="square" />
      </svg>

      <div class="down">
        <div class="address">
          <div class="address__title">{{ event.venue }}</div>
          <div class="address__name">
            Eko Atlantic Beach, Off Ahmadu Bello way, Victoria Island, Lagos.
          </div>
          <div class="address__map">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="margin: 0 10px 0 0"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M0.75 4.5V16.5L6 13.5L12 16.5L17.25 13.5V1.5L12 4.5L6 1.5L0.75 4.5Z"
                  stroke="#F5A623"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 1.5V13.5"
                  stroke="#F5A623"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 4.5V16.5"
                  stroke="#F5A623"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            View map for directions
          </div>
        </div>
        <div class="extra">
          <div class="address__title">DATE AND TIME</div>
          <div class="address__name">Friday, February 8th 2019, 10:00pm</div>
          <div class="social">SOCIAL LINKS</div>
          <ul v-for="(links, i) in event.social_links" :key="i">
            <li>
              <a href="https://www.nathanielcole.com"
                >http://www.nathanielcole.com</a
              >
            </li>
            <li>
              <a href="https://twitter.com/nathanielcole"
                >https://twitter.com/nathanielcole</a
              >
            </li>
            <li>
              <a href="https://instagram.com/nathanielcole"
                >https://instagram.com/nathanielcole</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <BlackOverlay class="overlay" v-if="overlay" />
    <ThankYouMessage
      class="register"
      v-if="completeSuccess"
      @closeThankYouMessage="closeThankYouMessage"
    />
    <Register class="register" v-if="register" @closeRegister="closeRegister" />
    <Payment
      class="payment"
      v-if="payment"
      @closePayment="closePayment"
      @paymentCompleted="paymentCompleted"
    />
    <!-- <div
      style="
        position: absolute;
        left: 31.46%;
        top: -5%;
        bottom: 0;
        mix-blend-mode: normal;
        opacity: 0.5;
        z-index: 1;
        height: 900px;
      "
    >
      <svg
        width="988"
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
      </svg>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import BlackOverlay from "@/components/BlackOverlay";
import ThankYouMessage from "../components/ThankYouMessage.vue";
import Register from "../components/Register.vue";
import Payment from "../components/Payment.vue";
const axios = require("axios");
export default {
  name: "Event",
  data() {
    return {
      overlay: false,
      payment: false,
      register: false,
      event: {},
      loading: false,
      completeSucesss: false,
    };
  },
  components: { BlackOverlay, ThankYouMessage, Register, Payment },
  methods: {
    gotoPayment: function () {
      this.payment = true;
    },
    closePayment: function () {
      this.payment = false;
    },
    paymentCompleted: function () {
      this.payment = false;
      this.overlay = true;
      this.completeSuccess = true;
    },
    closeRegister: function () {
      this.register = false;
      this.overlay = false;
    },
    closeThankYouMessage: function () {
      this.overlay = false;
      this.completeSuccess = false;
    },
  },

  created() {
    let id = this.$route.params.event_id;
    axios
      .get(`https://eventsflw.herokuapp.com/v1/events/${id}`)
      .then((response) => {
        let list = response.data;
        console.log(list.data.events);
        this.event = list.data;
        console.log(list.data);
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped lang="scss">
.register {
  position: fixed;
  margin: 40px 0 0 0;
}
.payment {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 6;
}
.overlay {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: black;
  z-index: 3;
}
.side {
  display: flex;
  width: 62%;
  margin: 0 auto;
  margin-top: 56.4px;
  &__one {
    width: 50%;
    padding-right: 50px;
    button {
      background-color: #f5a623;
      border: none;
      color: white;
      padding: 13px 16px 13px 16px;
      width: 206px;
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
    &__date {
      padding-right: 27px;
      font-size: 18px;
      color: #12122c;
    }
    &__title {
      padding-right: 100px;
      font-weight: bold;
      color: #12122c;
      margin: 15px 0;
      font-size: 30px;
      line-height: 30px;
      letter-spacing: 0px;
    }
    &__desc {
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 0px;
      text-align: left;
      color: #4a4a4a;
      font-style: italic;
      font-weight: bold;
      line-height: 1.5;
    }
    &__price {
      font-size: 1rem;
      margin: 30px 0 13px 0;
      letter-spacing: 0.5px;
    }
  }
  &__two {
    width: 50%;
    img {
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.306764));
      border-radius: 6px;
      width: 100%;
      height: 100%;
    }
  }
}
.line {
  margin: 30px auto;
}
.social {
  font-size: 0.8rem;
  margin: 20px 0 5px 0;
}
ul {
  list-style-type: none;
  font-size: 0.8rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #12122c;
}

.down {
  width: 63%;
  margin: 0 auto;
  display: flex;
}
.address {
  width: 50%;
  padding: 0 50px 0 0;
  box-sizing: border-box;
  &__title {
    font-size: 0.8rem;
  }
  &__name {
    font-size: 1.2rem;
    font-family: SFProDisplay;
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    font-weight: bold;
    margin: 10px 0;
  }
  &__map {
    display: flex;
    font-size: 0.8rem;
  }
}
.extra {
  width: 50%;
  padding: 0 50px 0 0;
  box-sizing: border-box;
  align-items: center;
}
// .free {
//   color: green;
// }
////////////////////////
</style>
