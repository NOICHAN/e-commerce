<template>
<VLoading :active="isLoading"></VLoading>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
    <div class="col" v-for="item in products" :key="item.id">
      <div class="card h-100">
        <img :src="item.imageUrl" class="card-img-top" :alt="item.title">
        <div class="card-body">
          <h3 class="card-title">
            <router-link to="/" class="stretched-link">{{ item.title }}</router-link>
          </h3>
          <div class="card-text d-flex justify-content-between align-items-center">
            <span class="text-dark text-decoration-line-through">
              ${{ $filters.currency(item.origin_price) }}</span>
            <span class="text-danger fw-bold fs-5">
              ${{ $filters.currency(item.price) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    img {
        width: 100%;
        height: 200px;
    }
    a {
    color: #181b46;
    text-decoration:none;
    &:hover {
        color: #fd9735;
        }
      }
    .card-body {
        position: relative;
    }
</style>

<script>
export default {
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  inject: ['emitter'],
  methods: {
    getShoppingProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.products = res.data.products;
          }
        })
        .catch(() => {
          this.isLoading = false;
          this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
        });
    },
  },
  created() {
    this.getShoppingProducts();
  },
};

</script>
