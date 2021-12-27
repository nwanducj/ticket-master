<template>
  <div class="main" v-if="TicketTypes.length > 0">
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
        <div class="title">{{ event.Episode.Name }}</div>
        <div class="date">{{ new Date().toDateString() }}</div>
      </div>
      <div v-for="(eventType, i) in TicketTypes" :key="i">
        <div class="event tm">
          <p class="event__type">{{ eventType.Name }}</p>
          <p class="event__price">
            {{ eventType.CurrencyName + getFormattedPrice(eventType.Price) }}
          </p>
          <div class="quantity">
            <min-btn @buttonClicked="eventType.quantity -= 1" />
            <span class="qty">{{ eventType.quantity }}</span>
            <add-btn @buttonClicked="eventType.quantity += 1" />
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
      <div class="summary" v-if="!showRegister">
        <div class="summary__title">
          <span>ORDER SUMMARY</span>
          <button class="close" @click="summaryOpen = false">
            <i class="fa fa-times"></i>
          </button>
        </div>

        <div v-for="(eventType, i) in TicketTypes" :key="i">
          <div class="flex" v-if="eventType.quantity > 0">
            <span>{{ eventType.Name }}</span>
            <span class="price">{{
              eventType.CurrencyName +
              getFormattedPrice(eventType.Price * eventType.quantity)
            }}</span>
          </div>
        </div>

        <div class="pay">
          <div class="flex">
            <span>Sub-total</span>
            <span class="price">{{
              TicketTypes[0].CurrencyName + getFormattedPrice(getSubTotal)
            }}</span>
          </div>
          <div class="flex">
            <span>VAT</span>
            <span class="price">{{
              TicketTypes[0].CurrencyName + getFormattedPrice(500)
            }}</span>
          </div>
          <div class="flex">
            <span>TOTAL PAYMENT</span>
            <span class="price--total">
              {{ TicketTypes[0].CurrencyName + getFormattedPrice(getTotal()) }}
            </span>
          </div>
        </div>
        <BigButton @buttonClicked="showRegister = true" :text="'CONTINUE'" />
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
      <div class="summary" v-if="showRegister">
        <div class="holder__main">
          <button
            class="back"
            aria-label="go back"
            @click="showRegister = false"
          >
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
        <form role="form" aria-label="User Information" @submit="makeFlwPay">
          <InputField
            :text="user.fullname"
            label="Full name"
            @get="user.fullname = $event.value"
          />
          <InputField
            :text="user.email"
            label="Email address"
            @get="user.email = $event.value"
          />
          <InputField
            :text="user.phone"
            label="Phone number"
            @get="user.phone = $event.value"
          />
          <div class="flex">
            <span>TOTAL PAYMENT</span>
            <span class="price--total">
              {{ TicketTypes[0].CurrencyName + getFormattedPrice(getTotal()) }}
            </span>
          </div>

          <BigButton
            @click="makeFlwPay"
            :text="
              'PAY ' +
              TicketTypes[0].CurrencyName +
              getFormattedPrice(getTotal())
            "
          />
        </form>

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
import AddBtn from "@/components/AddBtn.vue";
import MinBtn from "@/components/MinBtn.vue";
import InputField from "@/components/InputField.vue";
import { mapGetters } from "vuex";
export default {
  name: "MakeFlwPayment",
  props: ["closePayment", "paymentCompleted", "event", "userDto"],
  components: {
    BigButton,
    AddBtn,
    MinBtn,
    InputField,
  },
  data() {
    return {
      paymentData: {
        public_key: "FLWPUBK_TEST-65c6459da4b3fa0ae7b0d22ca0dd10b3-X",
        tx_ref: "3443DD#",
        amount: 0,
        currency: this.event.Episode.SummaryJSON.Currency,
        country: "NG",
        phone_number: "08102829960",
        payment_options: "card, ussd",
        customer: {
          name: `Chidike Nwandu`,
          email: "chidikenwandu@gmail.com",
        },
        callback: (response) => this.callbackFlutter(response),
        customizations: {
          title: "Ticket Master",
          description: "GET A TICKET",
        },
        onclose: this.closeFlutter,
      },
      summaryOpen: false,
      showRegister: false,
      TicketTypes: [],
      user: {
        fullname: "Chidike Nwandu",
        email: "chidikenwandu@gmail.com",
        phone: "08102829960",
      },
    };
  },
  computed: {
    ...mapGetters({
      cart: "getCartList",
    }),
    getSubTotal() {
      let total = 0;
      this.TicketTypes.forEach((item) => {
        total += item.Price * item.quantity;
      });
      return total;
    },
  },

  methods: {
    getTotal() {
      return 500 + this.getSubTotal;
    },
    referenceFlutter() {
      return `FUND_ACCOUNT-${this.user.fullname}-${
        this.getTotal
      }-${new Date()}`;
    },
    getFormattedPrice: function (price) {
      return formatCurrency(price);
    },
    close: function () {
      this.$emit("closePayment");
    },
    makeFlwPay() {
      if (!this.user.email || !this.user.phone || !this.user.fullname) {
        return;
      }
      this.TicketTypes.forEach((item) => {
        this.paymentData.amount += item.Price * item.quantity;
      });
      this.payWithFlutterwave(this.paymentData);
    },
    callbackFlutter: function (response) {
      if (response.status == "successful") {
        this.$emit("close");
        this.closePaymentModal();
        this.$emit("completeSuccess");
      }
    },
    closeFlutter: function () {
      this.closePaymentModal();
      this.$emit("close");
    },
  },
  mounted() {
    this.TicketTypes = this.event.TicketTypes.map((item) => {
      return { ...item, quantity: 0 };
    });
    this.TicketTypes[0].quantity = 1;
    this.user = { ...this.userDto };
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
  overflow-y: auto;
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
  overflow-y: auto;
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
  align-items: flex-end;
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
    line-height: 5px;
    font-size: 0.85rem;
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
      width: 30%;
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
