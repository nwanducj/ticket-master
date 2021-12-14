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
            <img src="@/assets/images/Frame.svg" />
          </button>
        </div>
      </div>
    </div>

    <div class="events">
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
  components: {
    LoadingScreen,
    Search,
    BaseButton,
  },
  methods: {},
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
  /* background-color: red; */
  &__title {
    font-size: 1.5rem;
    line-height: 40px;
    height: 40px;
    @media screen and (min-width: 768px) {
      font-size: 2.25rem;
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .location {
    margin-top: 50px;
    @media screen and (min-width: 768px) {
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
