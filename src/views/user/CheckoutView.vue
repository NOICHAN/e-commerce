<template>
  <Loading :loading="isLoading"></Loading>
  <div class="row justify-content-center bg-white py-5">
    <div class="col-5">
      <table class="table mb-5">
        <thead>
          <tr>
            <th scope="col">品名</th>
            <th scope="col">數量</th>
            <th scope="col">單價</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }} / {{ item.product.unit }}</td>
            <td class="text-end pe-4 text-nowrap">$ {{ $filters.currency(item.product.price) }}</td>
          </tr>
        </tbody>
        <tfoot class="text-end fw-bold fs-5">
          <td></td>
          <td><p class="text-nowrap mb-0">總計 :</p></td>
          <td><p class="pe-4 text-nowrap mb-0"> $ {{ $filters.currency(order.total) }}</p></td>
        </tfoot>
      </table>
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
          <tr>
              <th>付款狀態</th>
              <td>
                  <strong v-if="order.is_paid" class="text-success">付款完成</strong>
                  <span v-else class="text-muted">尚未付款</span>
              </td>
          </tr>
          </tbody>
      </table>
      <div class="text-end mb-5" v-show="!order.is_paid">
        <button type="button" class="btn btn-outline-warning"
        @click="payOrder">確認付款
        </button>
      </div>
    </div>
  </div>
</template>

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
