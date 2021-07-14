<template>
  <div class="holder" v-if="!loading">
    <div class="tag">The best events happening now.</div>
    <div style="width: 80%; margin: 0 auto">
      <div class="events">
        <div
          v-for="(event, i) in events"
          :key="i"
          @click="$router.push(`/event:${event.id}`)"
        >
          <div class="event" v-if="!event.is_sold_out">
            <img
              v-if="event.image !== null"
              :src="event.image"
              alt="event image"
            />
            <img
              v-if="event.image == null"
              src="@/assets/images/Event-image.png"
              alt="event image"
            />
            <div class="event__date">{{ event.start_time }}</div>
            <div class="event__name">{{ event.name }}</div>
            <div class="event__price" v-if="!event.is_free">
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
export default {
  name: "Home",
  data() {
    return {
      loading: true,
      events: [],
    };
  },
  components: {},
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
      font-family: Flutterwave;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0.5px;
      text-align: left;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.tag {
  width: 76%;
  margin: 20px auto 20px auto;
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
