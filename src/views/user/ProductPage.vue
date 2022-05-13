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
        <strong v-if="feature.length > 0"><p>產品特色 : </p></strong>
        <p v-for="item in feature" :key="item">{{ item }}</p>
        <span class="text-dark text-decoration-line-through me-3" v-if="discount !== 10">
          原價 : ${{ $filters.currency(product.origin_price) }}</span>
        <span class="text-danger fw-bold fs-5 me-3" v-if="discount !== 10">
          優惠 : ${{ $filters.currency(product.price) }}</span>
        <span class="text-danger fw-bold fs-5 me-3" v-else>
          價格 : ${{ $filters.currency(product.price) }}</span>
        <span class="badge rounded-pill bg-primary fs-6"
        v-if="discount !== 10">約{{ discount }}折</span>
        <br>
        <label for="amount" class="d-flex align-items-center my-3">數量:
          <button class="ms-5 symbol" :disabled="quantity === 1" @click="count(-1)">-</button>
          <input id="amount" class="text-center" type="number" v-model="quantity">
          <button class="symbol" @click="count(1)">+</button>
        </label>
        <button type="button" class="btn btn-outline-warning" @click="addSoppingCart">
          <i class="bi bi-cart me-2 fs-5"></i>加入購物車</button>
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
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    input[type='number'] {
        -moz-appearance: textfield;
        width: 50px;
        height: 32px;
        border: 1px solid rgba(0,0,0,.09);
      }
    .symbol {
      border: 1px solid rgba(0,0,0,.09);
      background: #fff;
      width: 32px;
      height: 32px;
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
      quantity: 1,
    };
  },
  watch: {
    product() {
      if (this.product.content !== undefined) {
        this.feature = this.product.content.split('\n');
      }
      this.discount = (Math.round((this.product.price / this.product.origin_price) * 100)) / 10;
    },
    quantity() {
      if (this.quantity < 1) {
        this.quantity = 1;
      }
    },
  },
  methods: {
    async getProduct() {
      try {
        const getProductUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
        this.isLoading = true;
        const res = await this.$http.get(getProductUrl);
        if (res.data.success) {
          this.product = res.data.product;
        }
      } catch (error) {
        this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
      } finally {
        this.isLoading = false;
      }
    },
    count(num) {
      this.quantity += num;
    },
    async addSoppingCart() {
      try {
        const addSoppingCartUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
        const cart = {
          product_id: this.product.id,
          qty: this.quantity,
        };
        this.isLoading = true;
        await this.$http.post(addSoppingCartUrl, { data: cart });
        this.$alert(`${this.product.title} 已加入購物車`);
      } catch (error) {
        this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
      } finally {
        this.isLoading = false;
      }
    },
  },
  async created() {
    this.id = this.$route.params.productId;
    await this.getProduct();
  },
};
</script>
