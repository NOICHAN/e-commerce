<template>
  <VLoading :active="isLoading"></VLoading>
  <table class="table">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in orders" :key="key">
        <td>{{ $filters.date(item.create_at) }}</td>
        <td>{{ item.user.email}}</td>
        <td>
            <ul class="list-unstyled">
                <li v-for="(product,key) in item.products" :key="key">
                {{ product.title }} 數量：{{ product.qty }}
                {{ product.unit }}
                </li>
            </ul>
        </td>
        <td>{{ item.total }}</td>
        <td>
             <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox"
              :id="`paidSwitch${item.id}`" v-model="item.is_paid"
              @change="updateOrder(item)">
              <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
        </td>
        <td>
            <div class="btn-group">
              <button class="btn btn-outline-info btn-sm"
              @click="openOrderModal(item)">檢視</button>
              <button class="btn btn-outline-danger btn-sm"
              @click="openDelOrderModal(item)">刪除</button>
            </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
  <OrderModal :order="tempOrder" ref="orderModal"></OrderModal>
  <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
</template>

<script>
import OrderModal from '../../components/OrderModal.vue';
import DelModal from '../../components/DelModal.vue';
import Pagination from '../../components/PaginationComponent.vue';

export default {
  data() {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
      isLoading: false,
    };
  },
  components: {
    OrderModal,
    DelModal,
    Pagination,
  },
  methods: {
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
        })
        .catch(() => {
          this.isLoading = false;
          this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
        });
    },
    openOrderModal(item) {
      this.tempOrder = { ...item };
      const orderComponent = this.$refs.orderModal;
      orderComponent.showModal();
    },
    updateOrder(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = { is_paid: item.is_paid };
      this.$http.put(api, { data: paid })
        .then(() => {
          this.getOrders(this.pagination.current_page);
        })
        .catch(() => {
          this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
        });
    },
    openDelOrderModal(item) {
      this.tempOrder = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.$http.delete(api)
        .then(() => {
          const delComponent = this.$refs.delModal;
          delComponent.hideModal();
          this.getOrders(this.pagination.current_page);
        }).catch(() => {
          this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
        });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
