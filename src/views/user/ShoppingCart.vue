<template>
    <Loading :loading="isLoading"></Loading>
<div class="bg-white py-5" v-if="shoppingCarts.total !== 0">
  <h3 class="m-2 m-md-5 text-primary">
    <i class="bi bi-box2-heart me-1"></i>
    購物車清單
  </h3>
  <div class="row justify-content-center mb-4 g-0"
  v-for="item in shoppingCarts.carts" :key="item.id">
    <div class="col-4 col-lg-2">
      <img :src="item.product.imageUrl" :alt="item.product.title">
    </div>
    <div class="col-6 d-flex flex-column justify-content-between px-1 px-md-4 body">
      <div class="d-flex justify-content-between align-items-center m-0 p-0">
        <h4 class="mb-0">{{ item.product.title }}</h4>
        <button class="symbol fs-2 fw-bold delete"
          @click="openDelCartModal(item)">
          <i class="bi bi-x"></i>
        </button>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <label for="amount" class="d-flex align-items-center">
          <button class="symbol" @click="updateCart(item,-1)">
            <i class="bi bi-dash"></i>
          </button>
          <input class="text-center amount" type="number" disabled
          v-model="item.qty">
          <button class="symbol" @click="updateCart(item,1)">
            <i class="bi bi-plus"></i>
          </button>
      </label>
      <strong class="text-nowrap text-primary">$ {{ $filters.currency(item.final_total) }}</strong>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-end align-items-center mb-2 fs-3">
    <strong class="me-2 me-md-5 text-nowrap">總計 :</strong>
    <strong class="me-5 text-nowrap text-danger"
    v-if="shoppingCarts.total === shoppingCarts.final_total">
        $ {{ $filters.currency(shoppingCarts.total) }}</strong>
    <strong class="fs-5 me-5 text-nowrap text-dark text-decoration-line-through"
    v-else>
        $ {{ $filters.currency(shoppingCarts.total) }}</strong>
  </div>
  <div class="d-flex justify-content-end align-items-center fs-3"
  v-if="shoppingCarts.total !== shoppingCarts.final_total">
    <strong class="me-2 me-md-5 text-nowrap">折扣價 :</strong>
    <strong class="me-5 text-nowrap text-danger">
        $ {{ $filters.currency(shoppingCarts.final_total) }}</strong>
  </div>
    <div class="input-group my-4 input-group-sm d-flex justify-content-end pe-4">
      <label for="couponCode">
        <input type="text" class="form-control couponCode" placeholder="請輸入優惠碼" v-model="code">
      </label>
      <div class="input-group-append">
        <button class="btn btn-outline-info" type="button"
        @click="applyCoupon">
          套用優惠碼
        </button>
      </div>
    </div>
    <h3 class="m-2 m-md-5">猜你喜歡<i class="bi bi-heart ms-2 text-danger"></i></h3>
    <div class="row row-cols-2 row-cols-md-3 row-cols-xl-6 g-3 mb-5 mx-0 mx-md-4">
      <div class="col" v-for="item in random" :key="item.id">
        <div class="card h-100">
          <img class="card-img-top d-flex flex-column justify-content-between cartCard"
          :src="item.imageUrl" :alt="item.title">
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">
              <a href="#" class="stretched-link style"
              @click.prevent="getProduct(item.id)">{{ item.title }}
              </a>
            </h5>
            <div class="card-text d-flex justify-content-between align-items-center">
            <span class="text-dark text-decoration-line-through">
              ${{ $filters.currency(item.origin_price) }}</span>
            <span class="text-danger fw-bold">
              ${{ $filters.currency(item.price) }}</span>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <v-form class="form-floating col-8 col-md-5" v-slot="{ errors }"
      @submit="sendOrder">
        <div class="form-floating mb-3">
          <v-field type="email" class="form-control"
          id="floatingInput" placeholder="請輸入 Email"
          name="email" rules="email|required"
          :class="{ 'is-invalid': errors['email'] }"
          v-model="form.user.email"></v-field>
         <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
          <label for="floatingInput">Email</label>
          <error-message class="invalid-feedback" name="email">
          </error-message>
        </div>

        <div class="form-floating mb-3">
          <v-field type="text" class="form-control"
          id="name" placeholder="請輸入 姓名"
          name="姓名" rules="required"
          :class="{ 'is-invalid': errors['姓名'] }"
          v-model="form.user.name"></v-field>
         <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
          <label for="name">收件人姓名</label>
          <error-message class="invalid-feedback" name="姓名">
          </error-message>
        </div>

        <div class="form-floating mb-3">
          <v-field type="number" class="form-control"
          id="tel" placeholder="請輸入 電話"
          name="電話" rules="min:10|required"
          :class="{ 'is-invalid': errors['電話'] }"
          v-model="form.user.tel"></v-field>
         <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
          <label for="tel">收件人電話</label>
          <error-message class="invalid-feedback" name="電話">
          </error-message>
        </div>

        <div class="form-floating mb-3">
          <v-field type="text" class="form-control"
          id="address" placeholder="請輸入 地址"
          name="地址" rules="required"
          :class="{ 'is-invalid': errors['地址'] }"
          v-model="form.user.address"></v-field>
         <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
          <label for="address">收件人地址</label>
          <error-message class="invalid-feedback" name="地址">
          </error-message>
        </div>

        <div class="form-floating">
          <textarea class="form-control" placeholder="留言"
          id="floatingTextarea" v-model="form.message"></textarea>
           <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
           <label for="floatingTextarea">留言</label>
        <div class="mt-5">
          <div class="text-end">
            <button type="submit" class="btn btn-outline-info">送出訂單
            </button>
          </div>
        </div>
      </div>
    </v-form>
  </div>
</div>

<div class="bg-white py-5 d-flex flex-column justify-content-center align-items-center" v-else>
  <p class="fs-5">你的購物車還是空的</p>
    <router-link class="btn btn-outline-warning mb-4" to="/user/list">
      去逛逛主子喜歡甚麼
      <i class="bi bi-hearts"></i>
    </router-link>
    <span>
      <img class="cartCat" src="@/assets/images/CartCat.jpg" alt="cat">
    </span>
</div>

<DelModal :item="tempSoppingCart" ref="delModal" @del-item="delCart"></DelModal>
</template>

<style scoped lang="scss">
  td {
  vertical-align:middle;
  }
  img {
        width: 100%;
        height: 120px;
        object-fit: cover;
        object-position: center center;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
  .amount {
        -moz-appearance: textfield;
        width: 100%;
        height: 32px;
        border: none;
        background-color: transparent;
      }
  .num {
    flex: initial;
    width: 50px;
    @media(min-width: 576px) {
        width: 90px;
    }
  }
  .couponCode {
    flex: initial;
    width: 100%;
  }
  .body {
    background-color: rgba(104, 216, 247, 0.1);
    &:hover {
      background-color: rgba(104, 216, 247, 0.2);
    }
  }
  .style {
    color: #181b46;
    text-decoration:none;
    &:hover {
        color: #fd9735;
        }
      }
  .title {
    width: 200px;
    @media(min-width: 576px) {
      width: 350px;
    }
    @media(min-width: 992px) {
      width: 620px;
    }
  }
  .cartCard {
    height: 100px;
    }
  .cartCat {
    max-width: 100%;
    height: auto;
  }
  .symbol {
    border: none;
    background-color: transparent;
    color: #181b46;
    font-size: 16px;
    &:hover {
      color: #0dcaf0;
    }
    @media(min-width: 576px) {
      font-size: 32px;
    }
  }
  .delete:hover {
    color: #dc3545;
  }
</style>

<script>
import DelModal from '@/components/DelModal.vue';
import errorHandler from '@/utils/errorHandler.js';
import Loading from '@/components/LoadingComponent.vue';

export default {
  data() {
    return {
      isLoading: false,
      shoppingCarts: {},
      tempSoppingCart: {},
      products: [],
      random: [],
      code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  components: {
    DelModal,
    Loading,
  },
  methods: {
    async getShoppingCarts() {
      try {
        const getAllCartUrl = `${this.$apiUrl}/cart`;
        this.isLoading = true;
        const res = await this.$http.get(getAllCartUrl);
        if (res.data.success) {
          this.shoppingCarts = res.data.data;
        } else {
          throw new Error('updateOrderFailed');
        }
      } catch (error) {
        errorHandler(this.$alert, error.message);
      } finally {
        this.isLoading = false;
      }
    },
    async getShoppingProducts() {
      try {
        const getAllProductUrl = `${this.$apiUrl}/products/all`;
        this.isLoading = true;
        const res = await this.$http.get(getAllProductUrl);
        if (res.data.success) {
          this.products = res.data.products;
        } else {
          throw new Error('updateOrderFailed');
        }
      } catch (error) {
        errorHandler(this.$alert, error.message);
      } finally {
        this.isLoading = false;
      }
    },
    async updateCart(item, num) {
      try {
        const sum = item.qty + num;
        if (sum < 1) {
          await this.openDelCartModal(item);
        } else {
          const updateCartUrl = `${this.$apiUrl}/cart/${item.id}`;
          const cart = {
            product_id: item.product_id,
            qty: sum,
          };
          const res = await this.$http.put(updateCartUrl, { data: cart });
          if (!res.data.success) {
            throw new Error('updateOrderFailed');
          }
          console.log(item);
        }
      } catch (error) {
        errorHandler(this.$alert, error.message);
      } finally {
        await this.getShoppingCarts();
      }
    },
    openDelCartModal(item) {
      this.tempSoppingCart = { ...item.product };
      this.tempSoppingCart.cartId = item.id;
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    async delCart() {
      try {
        const deleteProductUrl = `${this.$apiUrl}/cart/${this.tempSoppingCart.cartId}`;
        const res = await this.$http.delete(deleteProductUrl);
        if (!res.data.success) {
          throw new Error('updateOrderFailed');
        }
        await this.getShoppingCarts();
      } catch (error) {
        errorHandler(this.$alert, error.message);
      } finally {
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
      }
    },
    async applyCoupon() {
      try {
        if (!this.code) {
          this.$alert('優惠券代碼不可為空白');
          return;
        }
        const applyCouponUrl = `${this.$apiUrl}/coupon`;
        const res = await this.$http.post(applyCouponUrl, { data: { code: this.code } });
        if (res.data.success) {
          this.code = '';
          await this.getShoppingCarts();
        } else {
          throw new Error('updateOrderFailed');
        }
      } catch (error) {
        errorHandler(this.$alert, error.message);
      }
    },
    async sendOrder() {
      try {
        const api = `${this.$apiUrl}/order`;
        const res = await this.$http.post(api, { data: this.form });
        if (res.data.success) {
          this.$router.push(`/user/checkout/${res.data.orderId}`);
        } else {
          throw new Error('updateOrderFailed');
        }
      } catch (error) {
        errorHandler(this.$alert, error.message);
      }
    },
    getRandom() {
      const { carts } = this.shoppingCarts;
      const filter = ['feed', 'canned', 'toy'];

      for (let i = 0; i < carts.length; i += 1) {
        const { category } = carts[i].product;
        const categoryIndex = filter.indexOf(category);
        if (categoryIndex !== -1) {
          filter.splice(i, 1);
        }
        if (filter.length === 0) {
          break;
        }
      }

      for (let i = 0; i < filter.length; i += 1) {
        const category = filter[i];
        const filterResult = this.products.filter((e) => e.category === category);
        for (let k = 0; k < 2; k += 1) {
          const randomIndex = Math.floor(Math.random() * (filterResult.length));
          this.random.push(filterResult[randomIndex]);
          filterResult.splice(randomIndex, 1);
        }
      }

      if (this.random.length < 6) {
        for (let i = 0; this.random.length < 6; i += 1) {
          const randomIndex = Math.floor(Math.random() * (this.products.length));
          const product = this.products[randomIndex];
          if (this.random.includes(product)) {
            this.products.splice(randomIndex, 1);
          } else {
            this.random.push(product);
            this.products.splice(randomIndex, 1);
          }
        }
      }
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
  },
  async mounted() {
    await Promise.all([
      this.getShoppingCarts(),
      this.getShoppingProducts(),
    ]);
    this.getRandom();
  },
};
</script>
