<template>
  <div class="holder" id="payment">
    <div class="hold">
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
        <label aria-label="Fullname" for="full name" class="label"
          >Full name</label
        >
        <input
          aria-required="true"
          v-model="person.fullname"
          type="text"
          id="full name"
        />
        <label aria-label="Email" for="email address" class="label"
          >Email address</label
        >
        <input
          aria-required="true"
          v-model="person.email"
          type="text"
          id="email address"
        />
        <label aria-label="Phone Number" for="phone number" class="label"
          >Phone number</label
        >
        <input
          aria-required="true"
          v-model="person.phoneNumber"
          type="text"
          id="phone number"
        />
      </form>
      <div class="flex money">
        <div class="total">TOTAL PAYMENT</div>
        <div class="price">{{ getFormattedPrice(totalPayment) }}</div>
      </div>
      <button @click="atFlutterwave">
        PAY
        {{ getFormattedPrice(totalPayment) }}
      </button>
      <div class="flexx">
        <div class="verified">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.6204 25.0104L10.7736 25.8376C9.97042 26.1973 9.02503 25.944 8.50934 25.2309L7.32356 23.5911C7.16849 23.3767 6.9293 23.2386 6.66605 23.2115L4.65308 23.0045C3.77765 22.9144 3.08558 22.2224 2.99554 21.3469L2.7885 19.3339C2.76143 19.0707 2.62333 18.8315 2.40889 18.6764L0.769125 17.4907C0.0559958 16.975 -0.197319 16.0296 0.162423 15.2264L0.989612 13.3796C1.09779 13.1381 1.09779 12.8619 0.989612 12.6204L0.162423 10.7736C-0.197319 9.97042 0.0559958 9.02504 0.769125 8.50934L2.40889 7.32356C2.62333 7.16849 2.76143 6.9293 2.7885 6.66605L2.99554 4.65308C3.08558 3.77765 3.77765 3.08557 4.65308 2.99553L6.66605 2.7885C6.9293 2.76143 7.16849 2.62333 7.32356 2.40889L8.50934 0.769125C9.02503 0.0559959 9.97042 -0.197319 10.7736 0.162423L12.6204 0.989606C12.8619 1.09778 13.1381 1.09778 13.3796 0.989606L15.2264 0.162423C16.0296 -0.197319 16.975 0.0559959 17.4907 0.769125L18.6764 2.40889C18.8315 2.62333 19.0707 2.76143 19.3339 2.7885L21.3469 2.99553C22.2224 3.08557 22.9144 3.77765 23.0045 4.65308L23.2115 6.66605C23.2386 6.9293 23.3767 7.16849 23.5911 7.32356L25.2309 8.50934C25.944 9.02504 26.1973 9.97042 25.8376 10.7736L25.0104 12.6204C24.9022 12.8619 24.9022 13.1381 25.0104 13.3796L25.8376 15.2264C26.1973 16.0296 25.944 16.975 25.2309 17.4907L23.5911 18.6764C23.3767 18.8315 23.2386 19.0707 23.2115 19.3339L23.0045 21.3469C22.9144 22.2224 22.2224 22.9144 21.3469 23.0045L19.3339 23.2115C19.0707 23.2386 18.8315 23.3767 18.6764 23.5911L17.4907 25.2309C16.975 25.944 16.0296 26.1973 15.2264 25.8376L13.3796 25.0104C13.1381 24.9022 12.8619 24.9022 12.6204 25.0104ZM7.98252 11.2433L6.40654 12.8193L11.6971 18.1099L19.8185 9.98847L18.2426 8.41249L11.6971 14.9579L7.98252 11.2433Z"
              fill="#2D9CDB"
            />
          </svg>
        </div>
        <div>
          <div class="money-1">100% customer satisfaction protection</div>
          <div class="money-2">Money back guarantee</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatCurrency } from "../static/utils.js";
import { mapGetters } from "vuex";
// const axios = require("axios");
export default {
  name: "SideOrderSignUp",
  data() {
    return {
      person: {
        fullname: "",
        email: "",
        phoneNumber: "",
      },
      flwKey: "FLWPUBK_TEST-65c6459da4b3fa0ae7b0d22ca0dd10b3-X",
      currency: "NGN",
      country: "NG",
      paymentData: {
        card_number: "4242424242424242",
        cvv: "812",
        expiry_month: "10",
        expiry_year: "22",
        currency: "NGN",
        amount: "",
        email: "",
        fullname: "",
        tx_ref: "MC-3243e",
        redirect_url:
          "https://webhook.site/3ed41e38-2c79-4c79-b455-97398730866c",
      },
    };
  },
  props: ["goBack", "totalPayment", "user", "paymentCompleted", "event"],
  computed: {
    referenceFlutter() {
      const date = Date.now();
      return `FUND_ACCOUNT-${this.person.firstName}-${this.totalPayment}-${date}`;
    },
    ...mapGetters({
      userDto: "getUser",
      cart: "getCartList",
    }),
  },
  methods: {
    goPrev: function () {
      this.$emit("goBack");
    },
    getFormattedPrice: function (price) {
      return formatCurrency(price);
    },

    atFlutterwave: function () {
      window.FlutterwaveCheckout({
        public_key: this.flwKey,
        tx_ref: this.referenceFlutter,
        amount: this.totalPayment,
        currency: this.currency,
        phone_number: this.person.phoneNumber,
        payment_options: "card",
        customer: {
          name: `${this.person.fullname}`,
          email: this.person.email,
        },
        callback: (response) => this.callbackFlutter(response),
        customizations: {
          title: "Ticket Master",
          description: "GET A TICKET",
          //  logo: "https://firebasestorage.googleapis.com/v0/b/nexbuy-d2da3.appspot.com/o/emailPictures%2FB1.png?alt=media&token=426d5cd2-3618-45c9-9c6d-bb301123b7ee",
        },
        close: this.closeFlutter(),
      });
    },
    callbackFlutter: function () {
      this.$emit("paymentCompleted");
      this.$router.push({
        path: `/event/${this.event.id}`,
        query: { paid: true },
      });
    },
    closeFlutter: function () {
      this.$emit("paymentCompleted");
      this.$router.push({
        path: `/event/${this.event.id}`,
        query: { paid: null },
      });
    },
  },
  created() {
    if (this.user) {
      this.person = this.user;
      this.paymentData.email = this.user.email;
      this.paymentData.fullname = this.user.fullname;
      this.paymentData.amount = this.totalPayment;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.holder {
  background-color: white;
  height: 100vh;
  &__main {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 700;
  }
}
.hold {
  width: 80%;
  margin: 40px auto;
}
.flex {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.flexx {
  display: flex;
  margin: 15px 0;
}
.verified {
  margin: 0 10px 0 0;
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
.guarantee {
  display: flex;
}
.money-1 {
  font-size: 0.8rem;
  font-weight: 700;
}
.money-2 {
  font-size: 0.7rem;
}
input {
  outline: none;
  border: none;
  background-color: #f2f2f2;
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: 5px 0;
  border: 1px solid darken(#f2f2f2, 10);
}
.label {
  font-size: 0.8rem;
  color: lighten(black, 30);
}
form {
  margin: 30px 0 10px 0;
}
.total {
  font-size: 0.7rem;
}
.price {
  font-weight: bold;
}
.money {
  margin: 20px 0;
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
  box-shadow: 0px 0 0px 0px white;
}
</style>
