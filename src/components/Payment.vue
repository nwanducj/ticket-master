<template>
  <div class="main">
    <div class="ml-4 list">
      <div class="mt-2">
        <button @click="close">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5L4.5 13.5"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.5 4.5L13.5 13.5"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Close
        </button>
      </div>
      <div class="title__holder">
        <div class="title">{{ cart.name }}</div>
        <div class="date">{{ getDate(cart.start_time) }}</div>
      </div>
      <div class="">
        <div
          class="flex tm"
          v-for="(varieties, i) in cart.varieties"
          :key="varieties"
        >
          <div style="width: 30%">{{ varieties.name }}</div>
          <div style="width: 30%">{{ getFormattedPrice(varieties.price) }}</div>
          <div style="display: flex; align-items: center">
            <svg
              @click="decreaseQyt(i)"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <circle cx="13" cy="11" r="10" fill="white" />
                <path
                  d="M16 9C17.1046 9 18 9.89543 18 11C18 12.1046 17.1046 13 16 13H10C8.89543 13 8 12.1046 8 11C8 9.89543 8.89543 9 10 9H16Z"
                  fill="#828282"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="-1" dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div class="qyt">{{ varieties.qyt }}</div>
            <svg
              @click="increaseQyt(i)"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <circle cx="13" cy="11" r="10" fill="white" />
                <path
                  d="M18 10.99C18 11.4929 17.5924 11.9005 17.0896 11.9005H16.0072C14.9066 11.9005 14.0143 12.7927 14.0143 13.8933V14.9754C14.0143 15.5413 13.5556 16 12.9898 16C12.4239 16 11.9652 15.5413 11.9652 14.9754V13.8831C11.9652 12.7881 11.0775 11.9005 9.98258 11.9005H8.91045C8.40762 11.9005 8 11.4929 8 10.99C8 10.4872 8.40762 10.0796 8.91045 10.0796H9.98258C11.0775 10.0796 11.9652 9.19197 11.9652 8.09702V7.02459C11.9652 6.45872 12.4239 6 12.9898 6C13.5556 6 14.0143 6.45872 14.0143 7.02459V8.08678C14.0143 9.18738 14.9066 10.0796 16.0072 10.0796H17.0896C17.5924 10.0796 18 10.4872 18 10.99Z"
                  fill="#828282"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dx="-1" dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <svg
          class="qyt-line"
          width="100%"
          height="2"
          viewBox="0 0 690 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.999274"
            y1="1.5"
            x2="689.999"
            y2="0.500001"
            stroke="#BDBDBD"
          />
        </svg>
      </div>
      <div
        style="
          width: 277px;
          height: 28px;
          left: 133px;
          font-family: Flutterwave;
          font-size: 14px;
          line-height: 28px;
          letter-spacing: 0.5px;
          color: #828282;
        "
      >
        Ticket sales ends on {{ getDate(cart.tickets_sale_end_date) }}
      </div>
    </div>
    <SideOrderSummary
      class="summary"
      @clickContinue="clickContinue"
      :totalPayment="totalPayment"
      :cart="cart"
      v-if="!continueClicked"
    />
    <SideOrderSignUp
      class="summary"
      @goBack="goBack"
      v-if="continueClicked"
      :totalPayment="totalPayment"
      :user="user"
      @paymentCompleted="$emit('paymentCompleted')"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { formatCurrency } from "../static/utils.js";
import SideOrderSummary from "@/components/SideOrderSummary.vue";
import SideOrderSignUp from "@/components/SideOrderSignUp.vue";
import { mapGetters } from "vuex";
export default {
  name: "Payment",
  props: ["closePayment", "paymentCompleted"],
  computed: {
    ...mapGetters({
      userDto: "getUser",
      cart: "getCartList",
    }),
  },
  data() {
    return {
      user: {
        fullname: "",
        email: "",
        phoneNumber: "",
      },
      props: [],
      cartList: [],
      continueClicked: false,
      totalPayment: 11000,
    };
  },
  components: {
    SideOrderSummary,
    SideOrderSignUp,
  },
  methods: {
    getFormattedPrice: function (price) {
      console.log(price);
      return formatCurrency(price);
    },
    getDate(date) {
      let new_date = new Date(date);
      let formated_date = new_date.toLocaleString("en-US", {
        day: "numeric", // numeric, 2-digit
        year: "numeric", // numeric, 2-digit
        month: "long", // numeric, 2-digit, long, short, narrow
      });
      return formated_date;
    },
    close: function () {
      this.$emit("closePayment");
    },
    clickContinue: function () {
      this.continueClicked = true;
      const script = document.createElement("script");
      script.src = "https://ravemodal-dev.herokuapp.com/v3.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    },
    goBack: function () {
      this.continueClicked = false;
    },
    increaseQyt(i) {
      this.cart.varieties[i].qyt += 1;
      this.$store.dispatch("updateCart", this.cart);
    },
    decreaseQyt(i) {
      if (this.cart.varieties[i].qyt > 0) {
        this.cart.varieties[i].qyt -= 1;
        this.$store.dispatch("updateCart", this.cart);
      }
      if (
        this.cart.varieties[0].qyt == 0 &&
        this.cart.varieties[1].qyt == 0 &&
        this.cart.varieties[2].qyt == 0
      ) {
        this.close();
      }
    },
  },
  mounted() {
    if (this.userDto) {
      this.user = this.userDto;
      console.log(this.cart);
    }
  },
};
</script>
<style lang="scss" scoped>
.summary {
  height: 100vh;
  width: 32vw;
  position: absolute;
  right: 0;
}
.main {
  background-color: #f2f2f2;
  display: flex;
  height: 100vh;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.list {
  width: 500px;
  margin: 40px 70px;
}
.qyt {
  // padding: 0 0 10px 0;
  margin: 0 10px;
}

button {
  border: none;
  display: flex;
  background-color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 0.8rem;
  color: darken(grey, 80);
  box-shadow: 0px 1.0167313814163208px 1.0167313814163208px 0px #00000080;
}
.title__holder {
  margin: 32px 0 64px 0;
}
.title {
  font-size: 1.7rem;
  font-weight: bold;
}
.date {
  color: grey;
  margin-top: 5px;
}
.tm {
  margin: 10px 0 0 0;
}
</style>
