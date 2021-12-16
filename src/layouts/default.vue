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
              <button>
                <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                  />
                </svg>
              </button>
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
  </div>
</template>

<script>
import BaseButton from "@/components//BaseButton.vue";
import ButtonText from "@/components//TextButton.vue";
export default {
  data() {
    return { show: true, clickedMenu: false };
  },
  components: {
    BaseButton,
    ButtonText,
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
.fas {
  width: 100px;
  height: 100px;
}
</style>
