<template>
  <div v-if="!loading">
    <div class="event" v-if="event" role="region" aria-label="Event">
      <div class="event__detail">
        <div class="event__image" role="img" :aria-label="event.description">
          <img
            :src="event.image || '@/assets/images/Event-image-1.png'"
            :alt="event.tags"
          />
        </div>
        <div class="event__one" role="article">
          <div class="event__date__top">{{ getDate(event.start_time) }}</div>
          <div class="event__name">
            {{ event.name }}
          </div>
          <div class="event__description">
            {{ event.description }} Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ea dolores maiatur,dolor sit amet consectetur,
            adipisicing elit. Ea dolores maiatur, modi quibusdam odit?
          </div>
          <div v-if="event" class="event__price">
            {{ getFormattedPrice(5000) }} - {{ getFormattedPrice(10000) }}
          </div>
          <div v-if="event.is_free" class="event__free">FREE</div>
          <button v-if="!event.is_free" @click="gotoPayment">BUY NOW</button>
          <button v-if="event.is_free" @click="gotoPayment">
            REGISTER FOR FREE
          </button>
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
      <div class="event__two" style="">
        <div class="event__venue">
          <div class="event__venue__text">
            {{ event.venue }}
          </div>
          <div class="event__address">
            Eko Atlantic Beach, Off Ahmadu Bello way, Victoria Island, Lagos.
          </div>
          <div class="event__direction">
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
        <div class="event_sec">
          <div class="event__date">DATE AND TIME</div>
          <div class="event__fulldate">
            {{ getDate(event.start_time) }}
          </div>
          <div class="event__links">SOCIAL LINKS</div>
          <ul role="list">
            <li v-for="(links, i) in event.social_links" :key="i">
              <a href="https://www.nathanielcole.com"
                >http://www.nathanielcole.com</a
              >
            </li>
          </ul>
        </div>
      </div>
      <ThankYouMessage
        class="register"
        v-if="completeSucesss"
        @closeThankYouMessage="closeThankYouMessage"
      />
      <Register
        class="register"
        v-if="register"
        @closeRegister="closeRegister"
        @continueFromRegister="continueFromRegister"
      />
      <Payment
        class="payment"
        v-if="payment && !loading"
        @closePayment="closePayment"
        @paymentCompleted="paymentCompleted"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { formatCurrency } from "../static/utils.js";
import ThankYouMessage from "../components/ThankYouMessage.vue";
import Register from "../components/Register.vue";
import Payment from "../components/Payment.vue";
import { mapGetters } from "vuex";
const axios = require("axios");
export default {
  name: "Event",
  data() {
    return {
      payment: false,
      register: false,
      event: {},
      loading: false,
      completeSucesss: false,
    };
  },
  components: { ThankYouMessage, Register, Payment },
  computed: {
    ...mapGetters({
      user: "getUser",
    }),
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
    gotoPayment: function () {
      if (!this.user) {
        this.register = true;
      } else {
        let event = { ...this.event };
        this.$store.dispatch("setCartList", event).then((this.loading = false));
        this.payment = true;
      }
    },
    continueFromRegister() {
      let event = { ...this.event };
      this.$store.dispatch("setCartList", event).then((this.loading = false));
      this.payment = true;
    },
    closePayment: function () {
      this.payment = false;
    },
    paymentCompleted: function () {
      this.payment = false;
      this.completeSuccess = true;
    },
    closeRegister: function () {
      this.register = false;
    },
    closeThankYouMessage: function () {
      this.overlay = false;
      this.completeSuccess = false;
    },
  },

  created() {
    let id = this.$route.params.event_id;
    try {
      axios
        .get(`https://eventsflw.herokuapp.com/v1/events/${id}`)
        .then((response) => {
          let list = response.data;
          this.event = list.data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped lang="scss">
.line {
  margin: 20px 0;
}

.event {
  padding: 25px 0;

  &__detail {
    display: block;
    width: 80%;
    margin: 0 auto;
  }
  &__date__top {
    margin-top: 0;
  }

  &__name {
    font-size: 1.4rem;
    margin: 10px 0;
  }
  &__price {
    font-size: 1rem;
    margin: 15px 0;
  }
  &__description {
    font-size: 0.9rem;
    margin: 10px 0;
    padding: 0 0 0 0;
    font-style: italic;
  }
  &__image {
    order: 1;
  }
  &__one {
    width: 100%;
    order: 2;
  }
  &__two {
    display: block;
    width: 80%;
    margin: 0 auto;
  }
  &__venue {
    width: 80%;
    margin: 0px 0 0 0;
  }
  &__date {
    margin: 20px 0 0px 0;
    font-weight: 500;
    font-size: 0.8rem;
  }
  &__venue__text {
    margin: 0 0 0 0;
    font-weight: 500;
    font-size: 1rem;
  }
  &__fulldate {
    margin: 10px 0;
    font-weight: 700;
    font-size: 1.2rem;
  }
  &__address {
    margin: 10px 0;
    font-weight: 700;
    font-size: 1.2rem;
  }
  &__links {
    margin: 15px 0 0 0;
    font-weight: 500;
    font-size: 0.8rem;
  }
  &__direction {
    display: flex;
    align-items: center;
    justify-items: center;
  }
  ul {
    list-style-type: none;
    margin: 5px 0;
    padding: 0 0;
  }
  &__sec {
    width: 100%;
  }
  &__free {
    color: green;
  }
  &__event__direction {
    display: flex;
    align-items: center;
    justify-items: center;
  }
}
img {
  width: 100%;
  height: 100%;
  margin: 5px 0 5px 0;
  border-radius: 5px;
  // order: 1;
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
  z-index: 10;
}
button {
  background-color: #f5a623;
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
a {
  text-decoration: none;
  color: grey;
}
@media screen and (min-width: 768px) {
  .event {
    padding: 50px 0;
    &__detail {
      display: flex;
      width: 50%;
      margin: 0 auto;
    }
    &__one {
      width: 100%;
      order: 1;
    }
    &__date__top {
      margin-top: 0;
    }
    &__name {
      font-size: 1.8rem;
      margin: 10px 0;
    }
    &__price {
      font-size: 1rem;
      margin: 15px 0;
    }
    &__description {
      font-size: 0.9rem;
      margin: 10px 0;
      padding: 0 20px 0 0;
      font-style: italic;
    }
    &__image {
      order: 2;
    }
    &__two {
      display: flex;
      width: 50%;
      margin: 0 auto;
    }
    &__venue {
      width: 50%;
      margin: 0 0 0 0;
    }
    &__date {
      margin: 0 0 0px 0;
      font-weight: 500;
      font-size: 0.8rem;
    }
    &__venue__text {
      margin: 0 0 10px 0;
      font-weight: 500;
      font-size: 1rem;
    }
    &__fulldate {
      margin: 10px 0;
      font-weight: 700;
      font-size: 1.2rem;
    }
    &__address {
      margin: 0 15px 10px 0;
      padding: 0 15px 0 0;
      font-weight: 700;
      font-size: 1.2rem;
    }
    &__links {
      margin: 15px 0 0px 0;
      font-weight: 500;
      font-size: 0.8rem;
    }
    &__direction {
      display: flex;
      align-items: center;
      justify-items: center;
    }
    ul {
      list-style-type: none;
      margin: 5px 0;
      padding: 0 0;
    }
    &__sec {
      width: 100%;
    }
    &__event__direction {
      display: flex;
      align-items: center;
      justify-items: center;
    }
  }
  img {
    width: 350px;
    height: 250px;
    margin: 5px 0 5px 0;
    border-radius: 5px;
    order: 1;
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
    z-index: 10;
  }
  button {
    background-color: #f5a623;
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
  a {
    text-decoration: none;
    color: grey;
  }

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
  a {
    text-decoration: none;
    color: grey;
  }
}
</style>
