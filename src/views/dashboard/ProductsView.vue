<template>
<VLoading :active="isLoading"></VLoading>
<div class="text-end">
  <button class="btn btn-outline-primary mt-2" type="button"
  @click="openProductModal(true)">新增產品</button>
</div>
  <table class="table mt-4">
  <thead>
    <tr>
      <th width="70">分類</th>
      <th>標題</th>
      <th width="115">原價</th>
      <th width="115">售價</th>
      <th width="100">是否啟用</th>
      <th max-width="180" class="d-none d-sm-block border-0">編輯</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in products" :key="item.id">
      <td>{{ item.category }}</td>
      <td>{{ item.title }}</td>
      <td class="text-right">
        {{ $filters.currency(item.origin_price) }}
      </td>
      <td class="text-right">
        {{ $filters.currency(item.price) }}
      </td>
      <td>
        <span class="text-success" v-if="item.is_enabled">啟用</span>
        <span class="text-muted" v-else>未啟用</span>
      </td>
      <td class="d-none d-sm-block">
        <div class="btn-group">
          <button class="btn btn-outline-info btn-sm"
          @click="openProductModal(false, item)">編輯</button>
          <button class="btn btn-outline-danger btn-sm"
          @click="openDelProductModal(item)">刪除</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>

<ProductModal :product="tempProduct" ref="productModal"
@update-product="updateProduct" ></ProductModal>

<DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"></DelModal>
</template>

<script>
import ProductModal from '../../components/ProductModal.vue';
import DelModal from '../../components/DelModal.vue';
import Pagination from '../../components/PaginationComponent.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          }
        })
        .catch(() => {
          this.isLoading = false;
          this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
        });
    },
    openProductModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      const productComponent = this.$refs.productModal;
      // 新增
      if (this.isNew) {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
        const httpMethod = 'post';
        this.$http[httpMethod](api, { data: this.tempProduct }).then(() => {
          productComponent.hideModal();
          this.getProducts();
        }).catch(() => {
          this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
        });
      }

      // 編輯
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
      const httpMethod = 'put';
      this.$http[httpMethod](api, { data: this.tempProduct }).then(() => {
        productComponent.hideModal();
        this.getProducts(this.pagination.current_page);
      }).catch(() => {
        this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
      });
    },
    openDelProductModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(api)
        .then(() => {
          const delComponent = this.$refs.delModal;
          delComponent.hideModal();
          this.getProducts(this.pagination.current_page);
        }).catch(() => {
          this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
