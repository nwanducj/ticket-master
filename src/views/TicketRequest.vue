<template>
  <div>
    <overlay>
      <div class="heading">
        <p id="caption">
          Enter your email and we’ll send your tickets right away!
        </p>
      </div>
      <div
        class="card card--center"
        role="region"
        aria-labelledby="descp"
        v-if="false"
      >
        <img src="@/assets/images/check.svg" />
        <p id="descp" class="descp">
          Your tickets have been confirmed and sent to your email address at
          <a href="#"><span>ted@flutterwave.com</span></a>
        </p>
        <big-button
          @buttonClicked="$router.push('/')"
          :text="'BUY MORE TICKETS'"
        />
      </div>
      <div class="card">
        <form>
          <input-field :label="'Email Address'" />
          <big-button @buttonClicked="payment" :text="'PAY N110,000'" />
        </form>
      </div>
    </overlay>
  </div>
</template>

<script>
// @ is an alias to /src
import Overlay from "@/components/Overlay.vue";
import InputField from "@/components/InputField.vue";
import BigButton from "@/components/BigButton.vue";

export default {
  name: "Ticket Request",
  components: {
    InputField,
    Overlay,
    BigButton,
  },
  data() {
    return {
      success: false,
      text: "",
    };
  },
  methods: {
    payment: function () {
      this.success = true;
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.descp {
  margin: 25px 0;
}
.heading {
  text-align: center;
  margin: 0 auto;
  padding: 0 40px;
  width: 390px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
}
a span {
  color: rgb(103, 103, 255);
}
</style>