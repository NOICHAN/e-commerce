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
@update-product="upsertProduct" ></ProductModal>

<DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"></DelModal>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue';
import DelModal from '@/components/DelModal.vue';
import Pagination from '@/components/PaginationComponent.vue';
import errorHandler from '@/utils/errorHandler.js';

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
    async getProducts(page = 1) {
      try {
        const getProductUrl = `${this.$apiUrl}/admin/products?page=${page}`;
        this.isLoading = true;
        const res = await this.$http.get(getProductUrl);
        if (res.data.success) {
          this.products = res.data.products;
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
    async upsertProduct(item) {
      try {
        // 預設新增
        this.tempProduct = item;
        let httpMethod = 'post';
        let ProductUrl = `${this.$apiUrl}/admin/product`;
        let currentPage = 1;

        if (!this.isNew) {
          // 編輯
          ProductUrl = `${this.$apiUrl}/admin/product/${item.id}`;
          httpMethod = 'put';
          currentPage = this.pagination.current_page;
        }

        const res = await this.$http[httpMethod](ProductUrl, { data: this.tempProduct });
        if (!res.data.success) {
          throw new Error('updateOrderFailed');
        }
        await this.getProducts(currentPage);
      } catch (error) {
        errorHandler(this.$alert, error.message);
      } finally {
        const productComponent = this.$refs.productModal;
        productComponent.hideModal();
      }
    },
    openDelProductModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    async delProduct() {
      try {
        const deleteProductUrl = `${this.$apiUrl}/admin/product/${this.tempProduct.id}`;
        const res = await this.$http.delete(deleteProductUrl);
        if (!res.data.success) {
          throw new Error('updateOrderFailed');
        }
        await this.getProducts(this.pagination.current_page);
      } catch (error) {
        errorHandler(this.$alert, error.message);
      } finally {
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
      }
    },
  },
  async created() {
    await this.getProducts();
  },
};
</script>
