<template>
  <div style="" class="hold">
    <div class="card">
      <div class="card__head">
        <div>REGISTER FOR FREE</div>
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
      <svg
        width="100%"
        height="1"
        viewBox="0 0 368 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.5" x2="368" y2="0.5" stroke="#BDBDBD" />
      </svg>

      <div class="register__form">
        <div class="desc">
          <form role="form" aria-label="User Information">
            <label for="full name" aria-label="Fullname" class="label"
              >Full name</label
            >
            <input
              aria-required="true"
              required
              v-model="fullname"
              type="text"
              id="full name"
            />
            <label for="email address" aria-label="Email Address" class="label"
              >Email address</label
            >
            <input
              aria-required="true"
              required
              v-model="email"
              type="text"
              id="email address"
            />
            <label for="phone number" aria-label="Phone Number" class="label"
              >Phone number</label
            >
            <input
              aria-required="true"
              required
              v-model="phoneNumber"
              type="text"
              id="phone number"
            />
          </form>
        </div>
        <button type="submit" @click="setUser">REGISTER</button>
      </div>
    </div>
  </div>
  <div class="overlay"></div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      fullname: "",
      email: "",
      phoneNumber: "",
    };
  },
  methods: {
    close() {
      this.$emit("closeRegister");
    },
    setUser: function () {
      this.$store
        .dispatch("setUser", {
          email: this.email,
          phoneNumber: this.phoneNumber,
          fullname: this.fullname,
        })
        .then(() => {
          this.$emit("continueFromRegister");
          this.close();
        });
    },
  },
};
</script>


<style scoped lang="scss">
.hold {
  position: fixed;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: red;
  z-index: 3;
  top: 0;
}
.overlay {
  height: 100%;
  width: 100vh;
  background-color: white;
  z-index: 2;
  position: fixed;
  top: 0;
}
.express > div {
  display: inline;
  padding: 0 30%;
  width: 40%;
  text-align: center;
}
.express {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  font-size: 1.2rem;
  font-weight: bold;
}

input {
  outline: none;
  border: none;
  background-color: lighten(#f2f2f2, 3);
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: 2px 0px 10px 0px;
  border: 1px solid darken(#f2f2f2, 10);
}
.card {
  width: 85vw;
  background-color: white;
  padding: 30px 30px 70px 30px;
  border-radius: 0px;
  box-shadow: 1px 1px 1px #aaaaaa;
  text-align: start;
  box-shadow: 0px 0px 0px 0px #00000040;
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
  }
}
.desc {
  margin: 15px 0;
}
.label {
  font-size: 0.9rem;
  color: #333333;
}
a {
  color: darken(lightblue, 30);
  text-decoration: none;
}
button {
  background-color: #faa800;
  border: none;
  color: white;
  padding: 13px 16px 13px 16px;
  width: 100%;
  height: 36.6px;
  font-size: 12.2px;
  line-height: 14.64px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 4.06px;
  letter-spacing: 0.51px;
  box-shadow: 0px 1.0167313814163208px 1.0167313814163208px 0px #00000080;
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
@media screen and (min-width: 768px) {
  .register__form {
    margin-top: 20px;
  }
  .hold {
    z-index: 50;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .overlay {
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.8;
    z-index: 2;
    position: fixed;
    top: 0;
  }
  .express > div {
    display: inline;
    padding: 0 30%;
    width: 40%;
    text-align: center;
  }
  .express {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    font-size: 1.2rem;
    font-weight: bold;
  }

  input {
    outline: none;
    border: none;
    background-color: lighten(#f2f2f2, 3);
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    margin: 2px 0px 10px 0px;
    border: 1px solid darken(#f2f2f2, 10);
  }
  .card {
    width: 320px;
    background-color: white;
    padding: 30px 30px 70px 30px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #aaaaaa;
    text-align: start;
    box-shadow: 0px 4px 4px 0px #00000040;
    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.8rem;
    }
  }
  .desc {
    margin: 15px 0;
  }
  .label {
    font-size: 0.9rem;
    color: #333333;
  }
  a {
    color: darken(lightblue, 30);
    text-decoration: none;
  }
  button {
    background-color: #faa800;
    border: none;
    color: white;
    padding: 13px 16px 13px 16px;
    width: 100%;
    height: 36.6px;
    font-size: 12.2px;
    line-height: 14.64px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 4.06px;
    letter-spacing: 0.51px;
    box-shadow: 0px 1.0167313814163208px 1.0167313814163208px 0px #00000080;
  }
}
</style>