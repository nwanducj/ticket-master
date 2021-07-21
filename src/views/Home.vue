<template>
  <div class="holder" v-if="!loading">
    <h2 class="tag">The best events happening now.</h2>
    <div class="hold">
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
    </div>
  </div>
  <LoadingScreen v-else style="position: fixed; height: 100vh; bottom: 0" />
</template>

<script>
import LoadingScreen from "../components/LoadingScreen.vue";
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
  components: { LoadingScreen },
  methods: {
    getDate(date) {
      let new_date = new Date(date);
      console.log(new_date);
      let formated_date = new_date.toLocaleString("en-US", {
        day: "numeric", // numeric, 2-digit
        year: "numeric", // numeric, 2-digit
        month: "long", // numeric, 2-digit, long, short, narrow
      });
      console.log(formated_date);
      return formated_date;
    },
  },
  created() {
    axios
      .get("https://eventsflw.herokuapp.com/v1/events")
      .then((response) => {
        let list = response.data;
        console.log(list.data.events);
        this.events = list.data.events;
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
.events {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  .event {
    &__date {
      width: 300px;
      font-size: 0.8rem;
      line-height: 14px;
      letter-spacing: 0px;
      text-align: left;
      margin: 5px 0 0px 0;
      color: #4f4f4f;
    }
    &__name {
      width: 300px;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0px;
      text-align: left;
      color: #333333;
    }

    &__price {
      width: 300px;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 17px;
      letter-spacing: 0.5px;
      text-align: left;
      margin: 0 0 10px 0;
      color: #4f4f4f;
    }
    img {
      width: 300px;
      height: 200px;
      border-radius: 5px;
    }
  }
}
.hold {
  width: 80%;
  // margin: 0 30px 0 10%;
  margin: 0 auto;
}
.tag {
  width: 80%;
  margin: 40px auto 20px 10%;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 900;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: left;
}
.first__image {
  width: 300px;
  height: 230px;
  border-radius: 5px;
}
@media screen and (min-width: 768px) {
  .events {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;

    .event {
      &__date {
        width: 300px;
        font-size: 10px;
        line-height: 14px;
        letter-spacing: 0px;
        text-align: left;
        margin: 5px 0 0px 0;
      }
      &__name {
        width: 300px;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0px;
        text-align: left;
      }
      &__price {
        width: 300px;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: 0.5px;
        text-align: left;
        margin: 0 0 10px 0;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
      .first__image {
        width: 100%;
        height: 240px;
        border-radius: 5px;
      }
    }
  }
  .tag {
    width: 76%;
    margin: 40px auto 20px 10%;
    font-size: 2rem;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: left;
  }
  .holder {
    width: 100vw;
  }
  .hold {
    width: 80%;
    margin: 0 30px 0 10%;
  }
}
</style>
