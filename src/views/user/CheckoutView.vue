<template>
  <VLoading :active="isLoading"></VLoading>
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
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
            console.log(this.order);
          }
        })
        .catch(() => {
          this.isLoading = false;
          this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
        });
    },
    payOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            this.getOrder();
          }
        })
        .catch(() => {
          this.isLoading = false;
          this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
        });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
