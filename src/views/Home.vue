<template>
  <div class="holder">
    <div class="tag">The best events happening now.</div>
    <div style="width: 80%; margin: 0 auto">
      <div class="events">
        <div v-for="i in 12" :key="i" class="event">
          <img src="@/assets/images/Event-image.png" alt="event image" />
          <div class="event__date">8TH FEBRUARY 2019</div>
          <div class="event__name">The Nathan Cole Experience</div>
          <div class="event__price">N5000 - N200,000</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
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
  }
}
.tag {
  width: 76%;
  margin: 20px auto 20px auto;
  font-size: 2rem;
}
.holder {
  width: 100vw;
}
</style>
