<template>
  <Loading :loading="isLoading"></Loading>
  <div class="row flex-column flex-lg-row justify-content-center align-items-center
  align-items-lg-start bg-white py-5">
    <div class="col-10 col-md-8 col-lg-5">
      <h3 class="text-primary mb-3">
        <i class="bi bi-card-checklist"></i>
        確認資料
      </h3>
      <p>感謝您訂購毛孩一家一商品，我們已收收訂單，確認付款後會立即準備出貨。</p>
      <p>以下是您的個人資料，請詳細核對，如有誤造成無法至指定日送達，我們將不負任何責任。</p>
      <table class="table mb-5">
          <tbody>
              <tr class="mb-3">
              <th>Email</th>
              <td><span>{{ order.user.email }}</span></td>
          </tr>
          <tr>
              <th>姓名</th>
              <td><span>{{ order.user.name }}</span></td>
          </tr>
          <tr>
              <th>收件人電話</th>
              <td><span>{{ order.user.tel }}</span></td>
          </tr>
          <tr>
              <th>收件人地址</th>
              <td><span>{{ order.user.address }}</span></td>
          </tr>
          </tbody>
      </table>
    </div>
    <div class="col-10 col-md-8 col-lg-5">
      <h3 class="text-primary mb-3">
        <i class="bi bi-credit-card-2-back"></i>
        訂單資訊
      </h3>
      <div class="row mb-4 g-0" v-for="item in order.products" :key="item.id">
        <div class="col-4">
          <img :src="item.product.imageUrl" alt="item.product.title">
        </div>
        <div class="col-8 d-flex flex-column justify-content-between px-3 body">
          <div class="d-flex justify-content-between align-items-center">
            <h4 class="mb-0">{{ item.product.title }}</h4>
            <strong class="text-nowrap">X {{ item.qty }}</strong>
          </div>
          <span class="align-self-end">$ {{ $filters.currency(item.product.price) }}</span>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center fs-5 mb-2">
        <strong class="text-nowrap">總計</strong>
        <strong class="text-nowrap text-danger">$ {{ $filters.currency(order.total) }}</strong>
      </div>
      <div class="d-flex justify-content-between align-items-center fs-5">
        <strong class="text-nowrap">付款狀態</strong>
        <strong v-if="order.is_paid" class="text-success">付款完成</strong>
        <strong v-else class="text-danger text-nowrap">尚未付款</strong>
      </div>
      <div class="text-end mt-5" v-show="!order.is_paid">
        <button type="button" class="btn btn-outline-info"
        @click="payOrder">確認付款
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  img {
        width: 100%;
        height: 100px;
        object-fit: cover;
        object-position: center center;
  }
  .body {
    background-color: rgba(104, 216, 247, 0.1);
    &:hover {
      background-color: rgba(104, 216, 247, 0.2);
    }
  }
</style>

<script>
import errorHandler from '@/utils/errorHandler.js';
import Loading from '@/components/LoadingComponent.vue';

export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
      isLoading: false,
    };
  },
  components: {
    Loading,
  },
  methods: {
    async getOrder() {
      try {
        const getOrderUrl = `${this.$apiUrl}/order/${this.orderId}`;
        this.isLoading = true;
        const res = await this.$http.get(getOrderUrl);
        if (res.data.success) {
          this.order = res.data.order;
        } else {
          throw new Error('updateOrderFailed');
        }
      } catch (error) {
        errorHandler(this.$alert, error.message);
      } finally {
        this.isLoading = false;
      }
    },
    async payOrder() {
      try {
        const PayOrderUrl = `${this.$apiUrl}/pay/${this.orderId}`;
        const res = await this.$http.post(PayOrderUrl);
        if (res.data.success) {
          await this.getOrder();
        } else {
          throw new Error('updateOrderFailed');
        }
      } catch (error) {
        errorHandler(this.$alert, error.message);
      }
    },
  },
  async mounted() {
    this.orderId = this.$route.params.orderId;
    await this.getOrder();
  },
};
</script>
