<template>
  <div class="holder" v-if="!loading">
    <div class="tag">The best events happening now.</div>
    <div style="width: 80%; margin: 0 30px 0 10%">
      <div class="events">
        <div
          v-for="(event, i) in events"
          :key="i"
          @click="$router.push(`/event/${event.id}`)"
        >
          <div class="event">
            <img
              v-if="event.image !== null"
              :src="event.image"
              alt="event image"
              style="width: 100%"
            />
            <img
              v-if="event.image == null"
              src="@/assets/images/Event-image.png"
              alt="event image"
              style="width: 358px; height: 242px"
            />

            <div style="width: 300px" class="event__date">
              {{ getDate(event.start_time) }}
            </div>
            <div style="width: 300px" class="event__name">
              {{ event.name }}
            </div>
            <div
              style="width: 300px"
              class="event__price"
              v-if="!event.is_free"
            >
              N5000 - N200,000
            </div>
            <div class="event__price" v-if="event.is_free">FREE</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
const axios = require("axios");
// const moment = require("moment");
export default {
  name: "Home",
  data() {
    return {
      loading: true,
      events: [],
    };
  },
  components: {},
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
      });
  },
};
</script>
<style scoped lang="scss">
.events {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  .event {
    &__date {
      font-size: 10px;
      line-height: 14px;
      letter-spacing: 0px;
      text-align: left;
      margin: 5px 0 0px 0;
    }
    &__name {
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0px;
      text-align: left;
    }
    &__price {
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
  }
}
.tag {
  width: 76%;
  margin: 40px auto 20px auto;
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
</style>
