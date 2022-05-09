<template>
    <VLoading :active="isLoading"></VLoading>
    <div class="bg-white ">
  <table class="table">
  <thead>
    <tr>
      <th></th>
      <th>品名</th>
      <th>數量</th>
      <th>單價</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in shoppingCarts.carts" :key="item.id">
      <td class="text-center ps-4">
          <button type="button" class="btn btn-outline-danger px-2 py-1"
          @click="openDelCartModal(item)">
              <i class="bi bi-trash-fill"></i></button>
      </td>
      <td>{{ item.product.title }}</td>
      <td>
        <div class="input-group aa">
            <input type="number" class="form-control text-center"
            aria-label="Amount (to the nearest dollar)"
            v-model="item.qty" min="1" @change="updateCart(item)">
            <span class="input-group-text d-none d-md-block">{{ item.product.unit }}</span>
        </div>
      </td>
      <td class="text-end pe-4">$ {{ $filters.currency(item.final_total) }}</td>
    </tr>
  </tbody>
</table>
</div>

<DelModal :item="tempSoppingCart" ref="delModal" @del-item="delCart"></DelModal>
</template>

<style scoped lang="scss">
 td {
   vertical-align:middle;
 }
</style>

<script>
import DelModal from '../../components/DelModal.vue';

export default {
  data() {
    return {
      isLoading: false,
      shoppingCarts: {},
      tempSoppingCart: {},
    };
  },
  components: {
    DelModal,
  },
  methods: {
    getShoppingCarts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          this.shoppingCarts = res.data.data;
        })
        .catch(() => {
          this.isLoading = false;
          this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
        });
    },
    updateCart(item) {
      if (item.qty < 1) {
        this.$alert('數量不可為 0 或 負數');
        return;
      }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(api, { data: cart })
        .then(() => {
          this.getShoppingCarts();
        })
        .catch(() => {
          this.isLoading = false;
          this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
        });
    },
    openDelCartModal(item) {
      this.tempSoppingCart = { ...item.product };
      this.tempSoppingCart.cartId = item.id;
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${this.tempSoppingCart.cartId}`;
      this.$http.delete(api)
        .then(() => {
          const delComponent = this.$refs.delModal;
          delComponent.hideModal();
          this.getShoppingCarts();
        })
        .catch(() => {
          this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
        });
    },
  },
  created() {
    this.getShoppingCarts();
  },
};
</script>
