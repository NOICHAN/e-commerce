<template>
    <VLoading :active="isLoading"></VLoading>
<div class="bg-white py-5" v-if="shoppingCarts.total !== 0">
  <table class="table">
  <thead>
    <tr>
      <th></th>
      <th class="title">品名</th>
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
        <div class="input-group">
            <input type="number" class="form-control text-center num"
            aria-label="Amount (to the nearest dollar)"
            v-model="item.qty" min="1" @change="updateCart(item)">
            <span class="input-group-text d-none d-md-block">{{ item.product.unit }}</span>
        </div>
      </td>
      <td class="text-end pe-4 text-nowrap">$ {{ $filters.currency(item.final_total) }}</td>
    </tr>
  </tbody>
  <tfoot class="text-end fw-bold">
     <tr>
      <td></td>
      <td></td>
      <td><p class="fs-5 mb-0 text-nowrap">總計 :</p></td>
      <td>
        <p class="pe-3 mb-0 text-nowrap" v-if="shoppingCarts.total === shoppingCarts.final_total">
          $ {{ $filters.currency(shoppingCarts.total) }}</p>
        <p class="pe-3 fs-6 text-decoration-line-through mb-0 text-nowrap" v-else>
        $ {{ $filters.currency(shoppingCarts.total) }}</p>
      </td>
    </tr>
    <tr v-if="shoppingCarts.total !== shoppingCarts.final_total">
      <td></td>
      <td></td>
      <td><p class="fs-5 text-success mb-0 text-nowrap">折扣價 :</p></td>
      <td>
        <p class="pe-3 fs-6 text-success mb-0">
          $ {{ $filters.currency(shoppingCarts.final_total) }}</p>
      </td>
    </tr>
  </tfoot>
</table>
    <div class="input-group mb-3 input-group-sm d-flex justify-content-end pe-4">
      <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
      <input type="text" class="form-control couponCode" placeholder="請輸入優惠碼" v-model="code">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button"
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
            <button type="submit" class="btn btn-outline-warning">送出訂單
            </button>
          </div>
        </div>
      </div>
    </v-form>
  </div>
</div>

<div class="bg-white py-5 d-flex flex-column justify-content-center align-items-center" v-else>
  <p class="fs-5">你的購物車還是空的</p>
    <router-link class="btn btn-outline-warning mb-4" to="/user/list">去逛逛主子喜歡甚麼
    <i class="bi bi-hearts"></i></router-link>
    <img class="cartCat" src="@/assets/images/CartCat.jpg" alt="cat">
</div>

<DelModal :item="tempSoppingCart" ref="delModal" @del-item="delCart"></DelModal>
</template>

<style scoped lang="scss">
 td {
   vertical-align:middle;
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
   width: 120px;
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
</style>

<script>
import DelModal from '../../components/DelModal.vue';

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
  },
  methods: {
    async getShoppingCarts() {
      try {
        const getAllCartUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
        this.isLoading = true;
        const res = await this.$http.get(getAllCartUrl);
        if (res.data.success) {
          this.shoppingCarts = res.data.data;
        } else {
          throw new Error(JSON.stringify(res, null, 1));
        }
      } catch (error) {
        this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
      } finally {
        this.isLoading = false;
      }
    },
    async getShoppingProducts() {
      try {
        const getAllProductUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
        this.isLoading = true;
        const res = await this.$http.get(getAllProductUrl);
        if (res.data.success) {
          this.products = res.data.products;
        } else {
          throw new Error(JSON.stringify(res, null, 1));
        }
      } catch (error) {
        this.$alert('1sorry，目前服務不可用，請稍後再試或聯絡管理員。');
      } finally {
        this.isLoading = false;
      }
    },
    async updateCart(item) {
      try {
        if (item.qty < 1) {
          await this.openDelCartModal(item);
          await this.getShoppingCarts();
          return;
        }
        const updateCartUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
        const cart = {
          product_id: item.product_id,
          qty: item.qty,
        };
        await this.$http.put(updateCartUrl, { data: cart });
        await this.getShoppingCarts();
      } catch (error) {
        this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
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
        const deleteProductUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${this.tempSoppingCart.cartId}`;
        await this.$http.delete(deleteProductUrl);
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        await this.getShoppingCarts();
      } catch (error) {
        this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
      }
    },
    async applyCoupon() {
      try {
        const applyCouponUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
        await this.$http.post(applyCouponUrl, { data: { code: this.code } });
        this.code = '';
        await this.getShoppingCarts();
      } catch (error) {
        this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
      }
    },
    async sendOrder() {
      try {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
        const res = await this.$http.post(api, { data: this.form });
        this.$router.push(`/user/checkout/${res.data.orderId}`);
      } catch (error) {
        this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
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
  async created() {
    await Promise.all([
      this.getShoppingCarts(),
      this.getShoppingProducts(),
    ]);
    this.getRandom();
  },
};
</script>
