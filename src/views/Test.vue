<template>
  <div class="holder" v-if="!loading">
    <div class="tag">The best events happening now.</div>
    <div style="margin: 0 auto; width: 600px">
      <Photogrid
        :events="events"
        style="width: 50vw; background-color: yellow"
      />
    </div>
  </div>
</template>

<script>
import Photogrid from "../components/Photogrid.vue";
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
  components: { Photogrid },
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
.photogrid {
  width: 50vw;
  background-color: yellow;
}
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
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0.5px;
      text-align: left;
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
  height: 100vh;
  background-color: red;
  height: 70vh;
  overflow: hidden;
  position: relative;
}
.holder::-webkit-scrollbar {
  display: none;
}
</style>
