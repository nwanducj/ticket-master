<template>
  <div>
    <overlay>
      <div class="event" v-if="event" role="region" aria-label="Event">
        <div class="event__detail">
          <div class="event__image" role="img" :aria-label="event.Info">
            <img :src="event.Episode.SummaryJSON.Image" />
          </div>
          <div class="event__one" role="article">
            <p class="event__date__top">
              {{
                ordinal_suffix_of(new Date(event.Episode.StartDate).getDate()) +
                "  " +
                months[new Date(event.Episode.StartDate).getMonth()] +
                " " +
                new Date(event.Episode.StartDate).getFullYear()
              }}
            </p>
            <h1 class="event__name btn">
              {{ event.Episode.Name }}
            </h1>
            <p class="event__description">
              {{ event.Episode.Info }}
            </p>
            <div v-if="event" class="event__price">
              <span
                >{{ event.Episode.SummaryJSON.Currency
                }}{{
                  getFormattedPrice(event.Episode.SummaryJSON.MinPrice)
                }}</span
              >
              <span
                v-if="
                  event.Episode.SummaryJSON.MaxPrice !=
                  event.Episode.SummaryJSON.MinPrice
                "
                >-</span
              >
              <span
                v-if="
                  event.Episode.SummaryJSON.MaxPrice !=
                  event.Episode.SummaryJSON.MinPrice
                "
                >{{ event.Episode.SummaryJSON.Currency
                }}{{
                  getFormattedPrice(event.Episode.SummaryJSON.MaxPrice)
                }}</span
              >
            </div>
            <div class="btn">
              <big-button :text="'BUY NOW'" @buttonClicked="register = true" />
            </div>
          </div>
        </div>
        <div class="event__two">
          <div class="event__sec">
            <h6 class="event__date">VENUE</h6>
            <p class="event__fulldate">
              {{ event.Episode.Address }}
            </p>

            <a class="event__direction">
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
              <span> View map for directions</span>
            </a>
          </div>
          <div class="event__sec">
            <h6 class="event__date">DATE AND TIME</h6>
            <p class="event__fulldate">
              {{ new Date(event.Episode.StartDate).toDateString() }}
            </p>
            <h6 class="event__links">SOCIAL LINKS</h6>
            <ul role="list">
              <li>
                <a href="https://www.nathanielcole.com"
                  >http://www.nathanielcole.com</a
                >
              </li>
            </ul>
          </div>
        </div>
        <ThankYouMessage
          class="register"
          @close="completeSuccess = false"
          v-show="completeSuccess"
        />
        <register
          class="register"
          v-if="register"
          @closeRegister="closeRegister"
          @continueFromRegister="continueFromRegister"
        />
      </div>
      <LoadingScreen
        v-if="loading"
        style="position: fixed; height: 100vh; top: 0; z-index: 30"
      />
    </overlay>
    <MakeFlwPayment
      v-if="showPayment"
      @close="showPayment = false"
      @completeSuccess="completeSuccess = true"
      :event="event"
      :userDto="user"
    />
  </div>
</template>

<script>
import { formatCurrency } from "../static/utils.js";
import ThankYouMessage from "../components/ThankYouMessage.vue";
import LoadingScreen from "../components/LoadingScreen.vue";
import Register from "../components/Register.vue";
import Overlay from "../components/Overlay.vue";
import MakeFlwPayment from "../components/MakeFlwPayment.vue";
import BigButton from "../components/BigButton.vue";
const axios = require("axios");
export default {
  name: "Event",
  data() {
    return {
      showPayment: false,
      register: false,
      event: null,
      loading: false,
      completeSuccess: false,
      months: [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
      ],
      user: {
        fullname: "Chidike Nwandu",
        email: "chidikenwandu@gmail.com",
        phone: "08102829960",
      },
    };
  },
  components: {
    ThankYouMessage,
    Register,
    LoadingScreen,
    MakeFlwPayment,
    Overlay,
    BigButton,
  },
  computed: {},
  methods: {
    ordinal_suffix_of(i) {
      var j = i % 10,
        k = i % 100;
      if (j == 1 && k != 11) {
        return i + "ST";
      }
      if (j == 2 && k != 12) {
        return i + "ND";
      }
      if (j == 3 && k != 13) {
        return i + "RD";
      }
      return i + "TH";
    },
    getFormattedPrice: function (price) {
      return formatCurrency(price);
    },
    continueFromRegister(res) {
      this.user = { ...res };
      this.register = false;
      this.showPayment = true;
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
    closeThankYouMessage() {
      this.completeSuccess = false;
    },
  },
  created() {
    let id = this.$route.params.event_id;
    this.loading = true;
    try {
      axios
        .get(`https://afri-functions.herokuapp.com/api/events/${id}`)
        .then((response) => {
          this.event = response.data.data.event;
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    } catch (error) {
      this.loading = false;
    }
  },
};
</script>
<style scoped lang="scss">
.btn {
  width: 100%;
  @media screen and(min-width:768px) {
    width: 400px;
  }
}
.event {
  &__detail {
    display: block;
    width: 80%;
    margin: 0 auto;
    padding: 50px 0;
    border-bottom: 1px grey solid;
    @media screen and (min-width: 660px) {
      width: 80%;
    }
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      width: 90%;
    }
    @media screen and (min-width: 992px) {
      width: 70%;
    }
  }
  &__date__top {
    margin: 0 0 24px;
    font-size: 18px;
  }

  &__name {
    font-size: 1.5rem;
    margin: 0px 0px 14px;
    line-height: 40px;
    @media screen and (min-width: 768px) {
      font-size: 2.2rem;
      padding: 0 40px 0 0;
    }
  }
  &__price {
    font-size: 24px;
    margin: 15px 0;
    span {
      font-size: 24px;
      font-weight: 700;
      color: #333333;
    }
  }
  &__description {
    font-size: 1.1rem;
    margin: 0px 0 29px;
    font-style: italic;
    color: #4f4f4f;
    line-height: 30px;
    @media screen and(min-width:768px) {
      padding: 0 50px 0 0;
      /* width: 420px; */
    }
  }
  &__image {
    order: 1;
    @media screen and (min-width: 768px) {
      order: 2;
      width: 500px;
    }
  }

  &__one {
    width: 100%;
    order: 2;
    @media screen and (min-width: 768px) {
      width: 50%;
      order: 1;
      margin: 0 40px 0px 0px;
    }
  }
  &__two {
    display: block;
    width: 80%;
    margin: 0 auto;
    padding: 25px 0 50px 0;
    @media screen and (min-width: 660px) {
      width: 80%;
    }
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      width: 90%;
    }
    @media screen and (min-width: 992px) {
      width: 70%;
    }
  }
  &__venue {
    width: 50%;
    font-size: 1rem;
    /* margin: 0px 0 0 0; */
    color: #333333;
  }
  &__date {
    margin: 20px 0 0px 0;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333333;
  }

  &__fulldate {
    margin: 10px 0 10px 0;
    padding: 0px 10px 0px 0;
    font-weight: 700;
    font-size: 1.2rem;
    color: #333333;
  }

  &__links {
    margin: 20px 0 0 0;
    font-weight: 600;
    font-size: 0.8rem;
    color: #333333;
  }
  &__direction {
    margin: 20px 0 0 0;
    display: flex;
    align-items: center;
    justify-items: center;
  }
  ul {
    list-style-type: none;
    margin: 5px 0;
    padding: 0 0;
    text-decoration: underline;
  }
  &__sec {
    width: 100%;
    @media screen and (min-width: 768px) {
      width: 50%;
    }
  }
  &__free {
    color: green;
  }
  &__direction {
    display: flex;
    align-items: center;
    justify-items: center;
    color: #ffa800;
  }

  img {
    width: 100%;
    height: 100%;
    margin: 5px 0 5px 0;
    border-radius: 5px;
    @media screen and (min-width: 768px) {
      object-fit: cover;
      order: 1;
    }
  }
  .map {
    width: 20px;
    height: 20px;
    display: inline;
    order: 1;
  }

  .payment {
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 6;
    @media screen and (min-width: 768px) {
      z-index: 6;
    }
  }
}
</style>

