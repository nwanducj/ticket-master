<template>
  <div>
    <div class="wrapper">
      <header>
        <nav>
          <a @click="$router.push('/')">
            <img src="@/assets/images/afri.png" />
          </a>
          <ul>
            <li class="menu">
              <IconButton name="fas fa-bars menu" @buttonClicked="toggleMenu" />
            </li>
            <li>
              <ButtonText
                @buttonClicked="$router.push('/ticket-request')"
                :text="'I didn\'t get my tickets'"
              />
            </li>
            <li>
              <BaseButton :text="'CREATE YOUR OWN EVENT'" />
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <main role="main">
      <slot />
    </main>
    <div v-if="clickedMenu">
      <button class="closeBtn" @click="toggleMenu">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 4.5L4.5 13.5"
            stroke="#333333"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 4.5L13.5 13.5"
            stroke="#333333"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <ButtonText
        @buttonClicked="$router.push('/ticket-request')"
        :text="'I didn\'t get my tickets'"
      />
      <BaseButton :text="'CREATE YOUR OWN EVENT'" />
    </div>
    <footer>
      <p>Copyright 2019. Flutterwave Inc</p>
      <div>
        <ul>
          <li><a href="#">Terms and condition</a></li>
          <li><a href="#" class="policy">Policy Privacy</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import BaseButton from "@/components//BaseButton.vue";
import ButtonText from "@/components//TextButton.vue";
import IconButton from "@/components//IconButton.vue";
export default {
  data() {
    return { show: true, clickedMenu: false };
  },
  components: {
    BaseButton,
    ButtonText,
    IconButton,
  },
  methods: {
    toggleMenu() {
      this.clickedMenu = !this.clickedMenu;
    },
    gotoLink() {
      this.clickedMenu = false;
      this.$router.push({
        path: "/ticket-request",
        query: { ticketrequest: true },
      });
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
header {
  margin-top: 21px;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    list-style: none;
    li {
      display: none;
    }
    .menu {
      display: inline;
    }
    @media screen and (min-width: 768px) {
      li {
        display: inline;
      }
      .menu {
        display: none;
      }
    }
  }
}
footer {
  display: block;
  width: 90%;
  margin: 0 auto 21px auto;
  ul {
    li {
      margin-top: 20px;
    }
  }
  a {
    display: block;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    width: 81.25%;
    justify-content: space-between;
    ul {
      display: flex;
      :last-child {
        margin-left: 20px;
      }
    }
  }
}
</style>
