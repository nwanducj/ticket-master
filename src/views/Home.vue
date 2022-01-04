<template>
  <div class="wrapper" v-if="!loading">
    <div class="hero">
      <div>
        <h3 class="hero__title">The best events happening now.</h3>
      </div>
      <div class="location">
        <search />
        <div class="location__handler">
          <p class="location__name"><strong>Lagos, Nigeria</strong></p>
          <button>
            <img src="@/assets/images/Frame.svg" alt="Event Picture"/>
          </button>
        </div>
      </div>
    </div>

    <div class="events">
      <div class="event" v-for="(event, i) in events" :key="i">
        <a :href="`/event/${event._id}`">
          <img :src="event.Episode.SummaryJSON.Image" class="image" />
          <span class="event__date">
            {{
              ordinal_suffix_of(new Date(event.Episode.StartDate).getDate()) +
              "  " +
              months[new Date(event.Episode.StartDate).getMonth()] +
              " " +
              new Date(event.Episode.StartDate).getFullYear()
            }}</span
          >
          <h5 class="event__name" id="caption">{{ event.Episode.Name }}</h5>
          <div class="event__price">
            <span
              >{{ event.Episode.SummaryJSON.Currency }}
              {{ formattedCurrency(event.Episode.SummaryJSON.MinPrice) }}</span
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
              >{{ event.Episode.SummaryJSON.Currency }}
              {{ formattedCurrency(event.Episode.SummaryJSON.MaxPrice) }}</span
            >
          </div>
        </a>
      </div>
    </div>
    <div class="more">
      <LoadButton :text="'LOAD MORE'" @buttonClicked="loadMore" />
    </div>
    <footer>
      <p>Copyright 2019. Flutterwave Inc</p>
      <span>
        <ul>
          <li><a href="#">Terms and condition</a></li>
          <li><a href="#" class="policy">Policy Privacy</a></li>
        </ul>
      </span>
    </footer>
  </div>
  <LoadingScreen v-else style="position: fixed; height: 100vh; bottom: 0" />
</template>

<script>
import LoadingScreen from "../components/LoadingScreen.vue";
import LoadButton from "../components/LoadButton.vue";
import Search from "../components/Search.vue";
import { formatCurrency } from "../static/utils";
const axios = require("axios");
export default {
  name: "Home",
  data() {
    return {
      loading: true,
      events: [],
      page: 1,
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
    };
  },
  components: {
    LoadingScreen,
    Search,
    LoadButton,
  },
  methods: {
    loadMore() {
      this.page += 1;
      axios
        .get(
          `https://afri-functions.herokuapp.com/api/events?page=${this.page}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          response.data.data.events.docs.map((item) => this.events.push(item));
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
    formattedCurrency(amount) {
      return formatCurrency(amount);
    },
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
  },
  mounted() {
    axios
      .get(`https://afri-functions.herokuapp.com/api/events`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        this.events = response.data.data.events.docs.map((item) => item);
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        this.loading = false;
      });
  },
};
</script>
<style scoped lang="scss">
.more {
  display: flex;
  margin: 50px 0;
  justify-content: center;
}
.image {
  width: 100%;
  height: 231px;
}
.hero {
  /* background-color: red; */
  margin-top: 40px;
  &__title {
    font-size: 2.25rem;
    line-height: 40px;
    height: 40px;

    @media screen and (min-width: 768px) {
      font-size: 2.25rem;
    }
  }
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .location {
    margin-top: 80px;
    @media screen and (min-width: 660px) {
      margin-top: 0px;
    }
    @media screen and (min-width: 768px) {
      margin-top: 0px;
      width: 420px;
      align-items: center;
      display: block;
    }
    @media screen and (min-width: 992px) {
      margin-top: 0px;
      width: 420px;
      align-items: center;
      display: flex;
    }
    &__handler {
      width: 300px;
      display: flex;
      /* margin-top: -10px; */
    }
    &__name {
      font-size: 0.8rem;
      line-height: 23px;
      letter-spacing: 0.5px;

      @media screen and (min-width: 768px) {
        margin-left: 10px;
        font-size: 1.2rem;
      }
    }
  }
}
.events {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  @media screen and (min-width: 660px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.event {
  margin-top: 40px;
  &__date {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0px;
    text-align: left;
    margin: 2.5px 0;
  }
  &__name {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    margin: 2.5px 0;
    letter-spacing: 0px;
    text-align: left;
  }
  &__price {
    font-size: 14px;
    font-style: normal;
    margin: 2.5px 0;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0.5px;
    text-align: left;
  }
}

footer {
  display: block;
  margin: 0 auto 0px auto;
  ul {
    li {
      margin-top: 20px;
    }
  }
  a {
    display: block;
  }
  @media screen and (min-width: 660px) {
    display: flex;
    /* width: 81.25%; */
    justify-content: space-between;
    ul {
      display: flex;
      :last-child {
        margin-left: 20px;
      }
      li {
        margin-top: 0px;
      }
    }
  }
}
</style>
