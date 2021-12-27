<template>
  <black-overlay>
    <div class="card">
      <div class="card__head">
        <h4>REGISTER FOR FREE</h4>
        <button class="closeBtn" @click="close" aria-label="close payment">
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
      <div class="register__form">
        <div class="desc">
          <form role="form" aria-label="User Information" @submit="setUser">
            <InputField
              :text="user.fullname"
              label="Full name"
              @get="(value) => (user.fullname = value)"
            />
            <InputField
              :text="user.email"
              label="Email address"
              @get="(value) => (user.email = value)"
            />
            <InputField
              :text="user.phone"
              label="Phone number"
              @get="(value) => (user.phone = value)"
            />
            <BigButton @buttonClicked="setUser" :text="'REGISTER'" />
          </form>
        </div>
      </div>
    </div>
  </black-overlay>
</template>

<script>
import BlackOverlay from "@/components/BlackOverlay.vue";
import BigButton from "@/components/BigButton.vue";
import InputField from "@/components/InputField.vue";
export default {
  name: "Register",
  data() {
    return {
      user: {
        fullname: "Chidike Nwandu",
        email: "chidikenwandu@gmail.com",
        phone: "08102829960",
      },
    };
  },
  components: {
    BlackOverlay,
    InputField,
    BigButton,
  },
  methods: {
    close() {
      this.$emit("closeRegister");
    },
    setUser: function () {
      this.$emit("continueFromRegister", this.user);
      this.$emit("closeRegister");
    },
  },
};
</script>


<style scoped lang="scss">
.desc {
  margin: 15px 0;
}

a {
  color: darken(lightblue, 30);
  text-decoration: none;
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
.register__form {
  margin-top: 20px;
}
.card {
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    border-bottom: 1px solid #aaa;
  }
}
</style>