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
      <div
        v-for="(event, i) in events"
        :key="i"
        @click="
          $router.push({ path: `/event/${event.id}`, query: { paid: null } })
        "
        role="button"
      >
        <div
          class="event"
          role="figure"
          aria-labelledby="caption"
          :aria-label="event.description"
        >
          <img
            v-if="event.image !== null"
            :src="event.image"
            :alt="event.description"
          />
          <img
            v-if="event.image == null"
            src="@/assets/images/Event-image.png"
            :alt="event.description"
            class="first__image"
          />

          <div class="event__date">
            {{ getDate(event.start_time) }}
          </div>
          <div class="event__name" id="caption">
            {{ event.name }}
          </div>
          <div class="event__price" v-if="!event.is_free">
            N5,000 - N200,000
          </div>
          <div class="event__price" v-if="event.is_free">FREE</div>
        </div>
      </div>
    </div>
    <footer class="flex">
      <p class="terms">Copyright 2019. Flutterwave Inc</p>
      <div class="terms">
        <a href="#">Terms and condition</a>
        <a href="#" class="policy">Policy Privacy</a>
      </div>
    </footer>
  </div>
  <LoadingScreen v-else style="position: fixed; height: 100vh; bottom: 0" />
</template>

<script>
// import IconButton from "../components/IconButton.vue";
import LoadingScreen from "../components/LoadingScreen.vue";
import Search from "../components/Search.vue";
// @ is an alias to /src
const axios = require("axios");
// import { mapGetters } from "vuex";
// const moment = require("moment");
export default {
  name: "Home",
  data() {
    return {
      loading: true,
      events: [],
    };
  },
  components: { LoadingScreen, Search },
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
    letter-spacing: 0.5083656907081604px;
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

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
  padding-top: 30px;

  .terms {
    display: flex;
    margin: 20px 0 0 0;
  }
  .policy {
    margin: 0px 0 0 40px;
  }
}
@media screen and (min-width: 768px) {
  .flex {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding-bottom: 30px;
    padding-top: 30px;

    .terms {
      display: flex;
      margin: 0px 0 0 0;
    }
    .policy {
      margin: 0 0 0 48px;
    }
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
