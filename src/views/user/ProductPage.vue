<template>
<VLoading :active="isLoading"></VLoading>
  <div class="row row-cols-1 row-cols-md-2 bg-white py-5 gy-5">
    <div class="col">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item" v-for="(img, key) in product.imagesUrl"
          :key="img" :class="{active: active === key}">
            <img :src="img" class="d-block w-100" alt="img">
          </div>
        </div>
        <button class="carousel-control-prev" type="button"
          data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button"
          data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="col">
        <h3 class="text-center mb-5">{{ product.title }}</h3>
        <strong><p>產品特色 : </p></strong>
        <p v-for="item in feature" :key="item">{{ item }}</p>
        <span class="text-dark text-decoration-line-through
        me-3">原價 : ${{ product.origin_price }}</span>
        <span class="text-danger fw-bold fs-5 me-3">優惠 : ${{ product.price }}</span>
        <span class="badge rounded-pill bg-primary fs-6">約{{ discount }}折</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
    img {
        height: 500px;
    }
    h3,p {
        color: #181b46;
    }
</style>

<script>
export default {
  data() {
    return {
      product: {},
      id: '',
      isLoading: false,
      active: 0,
      feature: [],
      discount: null,
    };
  },
  watch: {
    product() {
      if (this.product.content !== undefined) {
        this.feature = this.product.content.split('\n');
      }
      this.discount = (Math.round((this.product.price / this.product.origin_price) * 100)) / 10;
    },
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.product = res.data.product;
          }
        })
        .catch(() => {
          this.isLoading = false;
          this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
        });
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
