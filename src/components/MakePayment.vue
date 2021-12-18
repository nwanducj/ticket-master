<template>
  <div class="main">
    <div class="one">
      <div>
        <button class="closeBtn" @click="$emit('close')">
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
        <div class="title">Wizkid Live in Concert</div>
        <div class="date">{{ new Date().toDateString() }}</div>
      </div>
      <div v-for="i in 3" :key="i">
        <div class="event tm">
          <p class="event__type">Tabel for 5</p>
          <p class="event__price">
            {{ getFormattedPrice(1000000) }}
          </p>
          <div class="quantity">
            <min-btn @buttonClicked="decreaseQyt(i)" />
            <span class="qty">{{ i }}</span>
            <add-btn @buttonClicked="increaseQyt(i)" />
          </div>
        </div>
      </div>

      <div class="ticket__sales">
        Ticket sales ends on {{ new Date().toDateString() }}
      </div>
      <div class="ticket__continue">
        <BigButton :text="'CONTINUE'" @buttonClicked="summaryOpen = true" />
      </div>
    </div>
    <div class="two" :class="summaryOpen ? '' : 'hidden'">
      <div class="summary">
        <div class="summary__title">
          <span>ORDER SUMMARY</span>
          <button class="close" @click="summaryOpen = false">
            <i class="fa fa-times"></i>
          </button>
        </div>

        <div class="flex" v-for="i in 4" :key="i">
          <span>3 - Table for One</span>
          <span class="price">{{ getFormattedPrice(2000 * 5) }}</span>
        </div>

        <div class="pay">
          <div class="flex">
            <span>Sub-total</span>
            <span class="price">{{ getFormattedPrice(2000) }}</span>
          </div>
          <div class="flex">
            <span>VAT</span>
            <span class="price">{{ getFormattedPrice(5000) }}</span>
          </div>
          <div class="flex">
            <span>TOTAL PAYMENT</span>
            <span class="price--total">
              {{ getFormattedPrice(2000 + 5) }}
            </span>
          </div>
        </div>
        <BigButton @buttonClicked="goNext" :text="'CONTINUE'" />
        <div class="guarantee">
          <div class="guarantee__logo">
            <img src="@/assets/images/verified.svg" alt="" />
          </div>
          <div class="guarantee__text">
            <p class="money-1">100% customer satisfaction protection</p>
            <p class="money-2">Money back guarantee</p>
          </div>
        </div>
      </div>
      <div class="summary">
        <div class="holder__main" @click="goPrev">
          <button class="back" aria-label="go back">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="margin: 0 5px 0 0"
            >
              <path
                d="M19 12H5"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 19L5 12L12 5"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Go back
          </button>
        </div>
        <form role="form" aria-label="User Information">
          <InputField label="Full name" />
          <InputField label="Email address" />
          <InputField label="Phone number" />
        </form>
        <div class="flex">
          <span>TOTAL PAYMENT</span>
          <span class="price--total">
            {{ getFormattedPrice(2000 + 5) }}
          </span>
        </div>

        <BigButton
          @buttonClicked="goNext"
          :text="'PAY ' + getFormattedPrice(20000)"
        />

        <div class="guarantee">
          <div class="guarantee__logo">
            <img src="@/assets/images/verified.svg" alt="" />
          </div>
          <div class="guarantee__text">
            <p class="money-1">100% customer satisfaction protection</p>
            <p class="money-2">Money back guarantee</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { formatCurrency } from "../static/utils.js";
import BigButton from "@/components/BigButton.vue";
// import BaseButton from "@/components/BaseButton.vue";
import AddBtn from "@/components/AddBtn.vue";
import MinBtn from "@/components/MinBtn.vue";
import InputField from "@/components/InputField.vue";
import { mapGetters } from "vuex";
export default {
  name: "MakePayment",
  props: ["closePayment", "paymentCompleted", "event"],
  computed: {
    ...mapGetters({
      userDto: "getUser",
      cart: "getCartList",
    }),
    totalPayment() {
      let total = 0;
      this.cart.varieties.forEach((item) => {
        if (item.qty > 0) {
          total += item.price * item.qty * 1;
        }
      });

      return total + this.cart.vat;
    },
  },
  components: {
    BigButton,
    AddBtn,
    MinBtn,
    InputField,
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
  methods: {
    getFormattedPrice: function (price) {
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
      this.cart.varieties[i].qty += 1;
      this.$store.dispatch("updateCart", this.cart);
    },
    decreaseQyt(i) {
      if (this.cart.varieties[i].qty > 0) {
        this.cart.varieties[i].qty -= 1;
        this.$store.dispatch("updateCart", this.cart);
      }
      if (
        this.cart.varieties[0].qty == 0 &&
        this.cart.varieties[1].qty == 0 &&
        this.cart.varieties[2].qty == 0
      ) {
        this.close();
      }
    },
  },
  mounted() {
    if (this.userDto) {
      this.user = this.userDto;
    }
  },
};
</script>
<style lang="scss" scoped>
.fa {
  color: black;
  margin-left: 5px;
}
.main {
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
}
.one {
  width: 80%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin-left: 7%;
  }
}
.two {
  background-color: white;
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  .close {
    background-color: white;
    display: inline;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    width: 550px;
    width: 32%;
    position: relative;
  }
}
.back {
  background-color: white;
  border: none;
  color: black;
  padding: 0;
  width: 30%;
  display: flex;
  align-items: center;
  height: 36.6px;
  font-size: 12.2px;
  line-height: 14.64px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  border-radius: 4.06px;
  letter-spacing: 0.51px;
}
.flex {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.summary {
  width: 80%;
  margin: 50px auto;
  font-weight: 700;
  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    padding-bottom: 20px;
  }
}
.pay {
  border-top: 1px solid grey;
  padding: 10px 0;
}
.price {
  font-weight: 400;
  &--total {
    font-size: 1.4rem;
  }
}
.guarantee {
  display: flex;
  align-items: center;
  font-weight: 400;
  margin: 10px 0;
  img {
    margin-right: 10px;
  }
  &__text {
    line-height: 3px;
  }
}

.event {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333333;
  font-size: 1rem;

  @media screen and (min-width: 660px) {
    font-size: 1.3rem;
    /* width: 500px; */
    width: 100%;
    &__type {
      width: 20%;
      font-weight: 600;
    }
    &__price {
      width: 20%;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: 0.5px;
      text-align: left;
    }
    .qty {
      font-weight: 600;
      margin: 0 10px;
      letter-spacing: 0.5px;
    }
  }
}

.closeBtn {
  border: none;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 0.8rem;
  margin: 50px 0 0 0;
  color: darken(grey, 80);
  box-shadow: 0px 1.0167313814163208px 1.0167313814163208px 0px #00000080;
}
.title__holder {
  margin: 20px 0 25px 0;
}
.title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #12122c;

  @media screen and (min-width: 768px) {
    font-size: 1.7rem;
  }
}
.date {
  color: #4f4f4f;
  margin-top: 5px;
}
.tm {
  margin: 10px 0 0 0;
  padding: 10px 0;
  border-bottom: 1px solid grey;
}

.ticket__sales {
  height: 28px;
  left: 133px;

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
  margin-top: 20px;
  text-align: end;
}
@media screen and (min-width: 768px) {
  .title__holder {
    margin: 32px 0 64px 0;
  }

  .ticket__sales {
    /* width: 277px; */
    height: 28px;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.5px;
    color: #828282;
  }
  .ticket__continue {
    color: #f5a623;
    text-align: end;
    display: none;
  }
}
.hidden {
  display: none;
  @media screen and (min-width: 768px) {
    display: inline;
  }
}
</style>
