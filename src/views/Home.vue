<template>
  <div class="wrapper" v-if="!loading">
    <div class="hero">
      <h3 class="tag">The best events happening now.</h3>
      <div class="location">
        <Search />
        <p class="location__name"><strong>Lagos, Nigeria</strong></p>
        <button>
          <img src="@/assets/images/Frame.svg" />
        </button>
      </div>
    </div>
    <div class="events" role="grid">
      <div class="event" v-for="i in 36" :key="i">
        <img src="@/assets/images/Event-image.png" class="image" />
        <div class="event__date">8TH DECEMBER 2021</div>
        <div class="event__name" id="caption">Wizkid Made In Lagos</div>
        <div class="event__price">N5,000 - N200,000</div>
      </div>
    </div>
    <div class="more">
      <BaseButton :text="'LOAD MORE'" />
    </div>
  </div>
  <LoadingScreen v-else style="position: fixed; height: 100vh; bottom: 0" />
</template>

<script>
import LoadingScreen from "../components/LoadingScreen.vue";
import BaseButton from "../components/BaseButton.vue";
import Search from "../components/Search.vue";
const axios = require("axios");
export default {
  name: "Home",
  data() {
    return {
      loading: true,
      events: [],
    };
  },
  components: { LoadingScreen, Search, BaseButton },
  methods: {
    getDate(date) {
      let new_date = new Date(date);

      let formated_date = new_date.toLocaleString("en-US", {
        day: "numeric", // numeric, 2-digit
        year: "numeric", // numeric, 2-digit
        month: "long", // numeric, 2-digit, long, short, narrow
      });
      return formated_date;
    },
  },
  created() {
    axios
      .get("https://eventsflw.herokuapp.com/v1/events", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        let list = response.data;
        this.events = list.data.events;
        this.loading = false;
        console.log(this.events);
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
  display: flex;
  justify-content: space-between;
}
.location {
  display: flex;
  align-items: center;
  &__name {
    margin-left: 10px;
    font-size: 1.2rem;
    line-height: 23px;
    letter-spacing: 0.5px;
    text-align: left;
  }
}
.tag {
  font-size: 2.25rem;
  line-height: 40px;
  height: 40px;
  left: 100px;
}
.events {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
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

@media screen and (min-width: 768px) {
  .events {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
}
</style>
