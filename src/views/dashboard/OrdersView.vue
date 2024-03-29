<template>
  <Loading :loading="isLoading"></Loading>
  <table class="table">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th class="d-none d-sm-block border-0">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in orders" :key="key">
        <td class="text-break">{{ $filters.date(item.create_at) }}</td>
        <td class="text-break">{{ item.user.email}}</td>
        <td>
            <ul class="list-unstyled">
                <li v-for="(product,key) in item.products" :key="key">
                <p>{{ product.product.title }}</p><p> 數量：{{ product.qty }}
                {{ product.unit }}</p>
                </li>
            </ul>
        </td>
        <td class="text-nowrap">$ {{ $filters.currency(item.total) }}</td>
        <td>
             <div class="form-check form-switch">
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <input class="form-check-input" type="checkbox"
                  :id="`paidSwitch${item.id}`" v-model="item.is_paid"
                  @change="updateOrder(item)">
              </label>
              <span v-if="item.is_paid">已付款</span>
              <span v-else>未付款</span>
            </div>
        </td>
        <td class="d-none d-sm-table-cell">
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
import OrderModal from '@/components/OrderModal.vue';
import DelModal from '@/components/DelModal.vue';
import Pagination from '@/components/PaginationComponent.vue';
import errorHandler from '@/utils/errorHandler.js';
import Loading from '@/components/LoadingComponent.vue';

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
    Loading,
  },
  methods: {
    async getOrders(page = 1) {
      try {
        const getOrderUrl = `${this.$apiUrl}/admin/orders?page=${page}`;
        this.isLoading = true;
        const res = await this.$http.get(getOrderUrl);
        if (res.data.success) {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
        } else {
          throw new Error('updateOrderFailed');
        }
      } catch (error) {
        errorHandler(this.$alert, error.message);
      } finally {
        this.isLoading = false;
      }
    },
    openOrderModal(item) {
      this.tempOrder = { ...item };
      const orderComponent = this.$refs.orderModal;
      orderComponent.showModal();
    },
    async updateOrder(item) {
      try {
        const putOrderUrl = `${this.$apiUrl}/admin/order/${item.id}`;
        const paid = { is_paid: item.is_paid };
        const res = await this.$http.put(putOrderUrl, { data: paid });
        if (!res.data.success) {
          throw new Error('updateOrderFailed');
        }
      } catch (error) {
        errorHandler(this.$alert, error.message);
      } finally {
        await this.getOrders(this.pagination.current_page);
      }
    },
    openDelOrderModal(item) {
      this.tempOrder = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    async delOrder() {
      try {
        const deleteOrderUrl = `${this.$apiUrl}/admin/order/${this.tempOrder.id}`;
        const res = await this.$http.delete(deleteOrderUrl);
        if (!res.data.success) {
          throw new Error('updateOrderFailed');
        }
        await this.getOrders(this.pagination.current_page);
      } catch (error) {
        errorHandler(this.$alert, error.message);
      } finally {
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
      }
    },
  },
  async mounted() {
    await this.getOrders();
  },
};
</script>
