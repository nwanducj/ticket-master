<template>
  <div
    class="main"
    role="dialog"
    aria-label="Proceed to check items and make payment"
  >
    <div class="list">
      <div class="mt-2">
        <button class="closeBtn" @click="close">
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
          class="event tm"
          v-for="(varieties, i) in cart.varieties"
          :key="varieties"
        >
          <div class="event__type">{{ varieties.name }}</div>
          <div class="event__price">
            {{ getFormattedPrice(varieties.price) }}
          </div>
          <div class="quantity">
            <button
              class="add"
              @click="decreaseQyt(i)"
              aria-label="decrease quantity"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="region"
                aria-label="decrease quantity"
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
            </button>
            <div class="qyt">{{ varieties.qyt }}</div>
            <button
              class="add"
              @click="increaseQyt(i)"
              aria-label="Increase quantity"
            ></button>
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
      <div class="ticket__sales">
        Ticket sales ends on {{ getDate(cart.tickets_sale_end_date) }}
      </div>
      <div role="button" class="ticket__continue" @click="openSummary">
        <span>Continue</span
        ><i class="fa fa-angle-double-right" aria-hidden="true"></i>
      </div>
    </div>
    <SideOrderSummary
      :class="summaryOpen ? 'summaryy' : 'summary'"
      @clickContinue="clickContinue"
      @closeSummary="closeSummary"
      @openSummary="openSummary"
      :totalPayment="totalPayment"
      :cart="cart"
      v-if="!continueClicked || summaryOpen"
    />
    <SideOrderSignUp
      class="signup"
      @goBack="goBack"
      v-if="continueClicked"
      :event="event"
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
  props: ["closePayment", "paymentCompleted", "event"],
  computed: {
    ...mapGetters({
      userDto: "getUser",
      cart: "getCartList",
    }),
    totalPayment() {
      let total = 0;
      this.cart.varieties.forEach((item) => {
        if (item.qyt > 0) {
          total += item.price * item.qyt * 1;
          console.log(total);
        }
      });

      return total + this.cart.vat;
    },
  },
  data() {
    return {
      summaryOpen: false,
      user: {
        fullname: "",
        email: "",
        phoneNumber: "",
      },
      props: [],
      cartList: [],
      continueClicked: false,
    };
  },
  components: {
    SideOrderSummary,
    SideOrderSignUp,
  },
  methods: {
    closeSummary() {
      this.summaryOpen = false;
    },
    openSummary() {
      this.summaryOpen = true;
    },
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
.fa {
  color: #f5a623;
  margin-left: 5px;
}
.summary {
  height: 100vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: none;
}
.summaryy {
  height: 100vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: block;
}
.signup {
  height: 100vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
}
.main {
  background-color: #f2f2f2;
  display: flex;
  height: 100%;
}
.event {
  display: flex;
  justify-content: space-between;
  color: #333333;
  &__type {
    width: 30%;
  }
  &__price {
    width: 30%;
  }
}
.list {
  width: 80%;
  margin: 40px auto;
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
.closeBtn {
  margin-top: -10px;
}
.title__holder {
  margin: 20px 0 25px 0;
}
.title {
  font-size: 1.7rem;
  font-weight: bold;
  color: "#12122C";
}
.date {
  color: "#4F4F4F";
  margin-top: 5px;
}
.tm {
  margin: 10px 0 0 0;
}
.add {
  background-color: #f2f2f2;
  border: none;
  display: flex;
  color: darken(grey, 80);
  box-shadow: 0px 0 0px 0px #00000080;
  margin: 0;
  padding: 0;
}
.ticket__sales {
  width: 277px;
  height: 28px;
  left: 133px;
  font-family: Flutterwave;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: #828282;
}
.quantity {
  display: flex;
  align-items: center;
}
.ticket__continue {
  color: #f5a623;
  text-align: end;
}
@media screen and (min-width: 768px) {
  .summary {
    height: 100vh;
    width: 32vw;
    position: absolute;
    right: 0;
    display: block;
  }
  .signup {
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
  .event {
    display: flex;
    justify-content: space-between;
    &__type {
      width: 30%;
    }
    &__price {
      width: 30%;
    }
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
  .add {
    background-color: #f2f2f2;
    border: none;
    display: flex;
    color: darken(grey, 80);
    box-shadow: 0px 0 0px 0px #00000080;
    margin: 0;
    padding: 0;
  }
  .ticket__sales {
    width: 277px;
    height: 28px;
    left: 133px;
    font-family: Flutterwave;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.5px;
    color: #828282;
  }
  .quantity {
    display: flex;
    align-items: center;
  }
  .ticket__continue {
    color: #f5a623;
    text-align: end;
    display: none;
  }
}
</style>
