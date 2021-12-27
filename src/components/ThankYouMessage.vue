<template>
  <black-overlay>
    <div class="holder" role="dialog" aria-labelledby="dialogTitle">
      <div class="card card--center">
        <div style="float: right">
          <button class="closeBtn" @click="$emit('close')">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="card__main">
          <img src="@/assets/images/check.svg" />
          <p class="desc" id="dialogTitle">
            Your tickets have been confirmed and sent to your email address at
            <a href="#">ted@flutterwave.com</a>
          </p>
        </div>
      </div>
    </div>
  </black-overlay>
</template>

<script>
import BlackOverlay from "@/components/BlackOverlay.vue";
export default {
  name: "ThankYouMessage",
  components: {
    BlackOverlay,
  },
  data() {
    return {};
  },
  props: [],
  methods: {},
};
</script>


<style scoped lang="scss">
.card {
  &__main {
    margin-top: 50px;
  }
}
.closeBtn {
  background-color: white;
  border: none;
  padding: 0;
  width: 25px;
  height: 36.6px;
  font-size: 12.2px;
  line-height: 14.64px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 4.06px;
  letter-spacing: 0.51px;
  box-shadow: 0px 0 0 0px #00000080;
}
.desc {
  margin: 15px 0;
}

a {
  color: darken(lightblue, 30);
  text-decoration: none;
}
</style>