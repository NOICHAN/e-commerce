<template>
    <router-link to="/user/cart">
        <i class="bi bi-cart-check icon position-relative text-info">
            <span class="position-absolute translate-middle
        badge rounded-pill bg-danger">
                {{ shoppingCarts.length }}
            </span>
        </i>
    </router-link>
</template>

<style scoped lang="scss">
    .icon {
        font-size: 48px;
         @media(min-width: 768px) {
          font-size: 60px;
        }
    }
    span {
        top: 25%;
        left: 90%;
        font-size: 12px;
    }
</style>

<script>
import errorHandler from '@/utils/errorHandler.js';

export default {
  data() {
    return {
      shoppingCarts: [],
    };
  },
  methods: {
    async getShoppingCarts() {
      try {
        const getAllCartUrl = `${this.$apiUrl}/cart`;
        const res = await this.$http.get(getAllCartUrl);
        if (res.data.success) {
          this.shoppingCarts = res.data.data.carts;
        } else {
          throw new Error('updateOrderFailed');
        }
      } catch (error) {
        errorHandler(this.$alert, error.message);
      }
    },
  },
  async mounted() {
    await this.getShoppingCarts();
  },
};
</script>
