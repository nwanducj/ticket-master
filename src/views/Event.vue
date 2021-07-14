<template>
  <div style="position: relative; height: 100%">
    <div class="side">
      <div class="side__one">
        <div class="side__one__date">8th February 2019</div>
        <div class="side__one__title">The Nathan Cole Experience</div>
        <div class="side__one__desc">
          Two-Time Grammy Award winner, Nathaniel Cole, who’s also just released
          an album, Into The Wild, will be having his first concert in Lagos,
          Nigeria! Fans have waited so long for this announcement, and it
          promises to be everything anyone has imagined.
        </div>
        <div class="side__one__price">N5000 - N200,000</div>
        <button>BUY NOW</button>
      </div>
      <div class="side__two">
        <img src="@/assets/images/Event-image-1.png" alt="event image" />
      </div>
    </div>
    <svg
      class="line"
      width="100%"
      height="1"
      viewBox="0 0 941 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 0.5H940.358" stroke="#CCB7B1" stroke-linecap="square" />
    </svg>

    <div class="down">
      <div class="address">
        <div class="address__title">VENUE</div>
        <div class="address__name">
          Eko Atlantic Beach, Off Ahmadu Bello way, Victoria Island, Lagos.
        </div>
        <div class="address__map">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="margin: 0 10px 0 0"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M0.75 4.5V16.5L6 13.5L12 16.5L17.25 13.5V1.5L12 4.5L6 1.5L0.75 4.5Z"
                stroke="#F5A623"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 1.5V13.5"
                stroke="#F5A623"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 4.5V16.5"
                stroke="#F5A623"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          View map for directions
        </div>
      </div>
      <div class="extra">
        <div class="address__title">DATE AND TIME</div>
        <div class="address__name">Friday, February 8th 2019, 10:00pm</div>
        <div class="social">SOCIAL LINKS</div>
        <ul>
          <li>
            <a href="https://www.nathanielcole.com"
              >http://www.nathanielcole.com</a
            >
          </li>
          <li>
            <a href="https://twitter.com/nathanielcole"
              >https://twitter.com/nathanielcole</a
            >
          </li>
          <li>
            <a href="https://instagram.com/nathanielcole"
              >https://instagram.com/nathanielcole</a
            >
          </li>
        </ul>
      </div>
    </div>
    <BlackOverlay class="overlay" v-if="false" />
    <ThankYouMessage style="top: 10%" v-if="false" />
    <Register style="top: 10%" v-if="false" />
  </div>
</template>

<script>
// @ is an alias to /src
import BlackOverlay from "@/components/BlackOverlay";
import ThankYouMessage from "../components/ThankYouMessage.vue";
import Register from "../components/Register.vue";
export default {
  name: "Event",
  components: { BlackOverlay, ThankYouMessage, Register },
};
</script>
<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: black;
}
.side {
  display: flex;
  width: 62%;
  margin: 0 auto;
  margin-top: 56.4px;
  &__one {
    width: 50%;
    padding-right: 50px;
    button {
      background-color: #f5a623;
      border: none;
      color: white;
      padding: 13px 16px 13px 16px;
      width: 206px;
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
    &__date {
      padding-right: 27px;
      font-size: 18px;
      color: #12122c;
    }
    &__title {
      padding-right: 100px;
      font-weight: bold;
      color: #12122c;
      margin: 15px 0;
      font-size: 30px;
      line-height: 30px;
      letter-spacing: 0px;
    }
    &__desc {
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 0px;
      text-align: left;
      color: #4a4a4a;
      font-style: italic;
      font-weight: bold;
      line-height: 1.5;
    }
    &__price {
      font-size: 1rem;
      margin: 30px 0 13px 0;
      letter-spacing: 0.5px;
    }
  }
  &__two {
    width: 50%;
    img {
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.306764));
      border-radius: 6px;
      width: 460px;
      height: 430px;
    }
  }
}
.line {
  margin: 30px auto;
}
.social {
  font-size: 0.8rem;
  margin: 20px 0 5px 0;
}
ul {
  list-style-type: none;
  font-size: 0.8rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #12122c;
}

.down {
  width: 63%;
  margin: 0 auto;
  display: flex;
}
.address {
  width: 50%;
  padding: 0 50px 0 0;
  box-sizing: border-box;
  &__title {
    font-size: 0.8rem;
  }
  &__name {
    font-size: 1.2rem;
    font-family: SFProDisplay;
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    font-weight: bold;
    margin: 10px 0;
  }
  &__map {
    display: flex;
    font-size: 0.8rem;
  }
}
.extra {
  width: 50%;
  padding: 0 50px 0 0;
  box-sizing: border-box;
  align-items: center;
}

////////////////////////
</style>
