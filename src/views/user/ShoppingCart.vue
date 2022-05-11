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
        @click="addCoupon">
          套用優惠碼
        </button>
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <v-form class="form-floating col-8 col-md-5" v-slot="{ errors }"
      @submit="addOrder">
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
    <img src="@/assets/images/CartCat.jpg" alt="">
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
 .title {
   width: 200px;
   @media(min-width: 576px) {
     width: 350px;
   }
   @media(min-width: 992px) {
     width: 620px;
   }
 }
 img {
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
    addCoupon() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      this.$http.post(api, { data: { code: this.code } })
        .then((res) => {
          console.log(res);
          this.code = '';
          this.getShoppingCarts();
        })
        .catch(() => {
          this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
        });
    },
    addOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.$http.post(api, { data: this.form })
        .then((res) => {
          console.log(res.data.orderId);
          this.$router.push(`/user/checkout/${res.data.orderId}`);
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
