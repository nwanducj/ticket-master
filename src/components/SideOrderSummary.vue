<template>
  <div class="holder">
    <div class="hold">
      <div>ORDER SUMMARY</div>
      <svg
        width="100%"
        height="1"
        viewBox="0 0 368 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.5" x2="368" y2="0.5" stroke="#BDBDBD" />
      </svg>
      <div class="flex" v-for="(varieties, i) in getCart" :key="i">
        <div>{{ varieties.name }}</div>
        <div>{{ varieties.price }}</div>
      </div>
      <svg
        class="mt-8"
        width="100%"
        height="1"
        viewBox="0 0 368 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.5" x2="368" y2="0.5" stroke="#BDBDBD" />
      </svg>
      <div class="flex">
        <div>Sub-total</div>
        <div>N10,000</div>
      </div>
      <div class="flex">
        <div>VAT</div>
        <div>N10,000</div>
      </div>
      <div class="flex">
        <div>Total PAYMENT</div>
        <div>N111,000</div>
      </div>
      <button @click="goNext">CONTINUE</button>
      <div class="guarantee mt-1" style="margin: 10px 0">
        <div style="margin: 0 10px 0 0">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.6204 25.0104L10.7736 25.8376C9.97042 26.1973 9.02503 25.944 8.50934 25.2309L7.32356 23.5911C7.16849 23.3767 6.9293 23.2386 6.66605 23.2115L4.65308 23.0045C3.77765 22.9144 3.08558 22.2224 2.99554 21.3469L2.7885 19.3339C2.76143 19.0707 2.62333 18.8315 2.40889 18.6764L0.769125 17.4907C0.0559958 16.975 -0.197319 16.0296 0.162423 15.2264L0.989612 13.3796C1.09779 13.1381 1.09779 12.8619 0.989612 12.6204L0.162423 10.7736C-0.197319 9.97042 0.0559958 9.02504 0.769125 8.50934L2.40889 7.32356C2.62333 7.16849 2.76143 6.9293 2.7885 6.66605L2.99554 4.65308C3.08558 3.77765 3.77765 3.08557 4.65308 2.99553L6.66605 2.7885C6.9293 2.76143 7.16849 2.62333 7.32356 2.40889L8.50934 0.769125C9.02503 0.0559959 9.97042 -0.197319 10.7736 0.162423L12.6204 0.989606C12.8619 1.09778 13.1381 1.09778 13.3796 0.989606L15.2264 0.162423C16.0296 -0.197319 16.975 0.0559959 17.4907 0.769125L18.6764 2.40889C18.8315 2.62333 19.0707 2.76143 19.3339 2.7885L21.3469 2.99553C22.2224 3.08557 22.9144 3.77765 23.0045 4.65308L23.2115 6.66605C23.2386 6.9293 23.3767 7.16849 23.5911 7.32356L25.2309 8.50934C25.944 9.02504 26.1973 9.97042 25.8376 10.7736L25.0104 12.6204C24.9022 12.8619 24.9022 13.1381 25.0104 13.3796L25.8376 15.2264C26.1973 16.0296 25.944 16.975 25.2309 17.4907L23.5911 18.6764C23.3767 18.8315 23.2386 19.0707 23.2115 19.3339L23.0045 21.3469C22.9144 22.2224 22.2224 22.9144 21.3469 23.0045L19.3339 23.2115C19.0707 23.2386 18.8315 23.3767 18.6764 23.5911L17.4907 25.2309C16.975 25.944 16.0296 26.1973 15.2264 25.8376L13.3796 25.0104C13.1381 24.9022 12.8619 24.9022 12.6204 25.0104ZM7.98252 11.2433L6.40654 12.8193L11.6971 18.1099L19.8185 9.98847L18.2426 8.41249L11.6971 14.9579L7.98252 11.2433Z"
              fill="#2D9CDB"
            />
          </svg>
        </div>
        <div class="ml-1">
          <div class="money-1">100% customer satisfaction protection</div>
          <div class="money-2">Money back guarantee</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideOrderSummary",
  data() {
    return {};
  },
  props: ["clickContinue", "totalPayment", "cart"],
  computed: {
    getCart() {
      let cartList = [];
      this.cart.varieties.forEach((item) => {
        if (item.qyt > 0) {
          cartList.push(item);
        }
      });
      return cartList;
    },
  },
  methods: {
    goNext: function () {
      this.$emit("clickContinue");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.holder {
  background-color: white;
  height: 100vh;
}
.hold {
  width: 80%;
  margin: 60px auto;
}
.flex {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
button {
  background-color: #f5a623;
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
.guarantee {
  display: flex;
}
.money-1 {
  font-size: 1rem;
  font-weight: 700;
}
.money-2 {
  font-size: 0.8rem;
}
</style>
