<template>
  <div class="row py-5 bg-white flex-column justify-content-center">
    <div class="banner">
      <img src="@/assets/images/productsCat.png" class="d-block w-100 bannerImg" alt="全館滿499元免運">
      <div class="bannerContent bg-special text-white">
        <h3 class="text-danger">什麼 !?</h3>
        <p>輸入折扣碼 : <strong class="text-nowrap">我是貓奴</strong></p>
        <p class="text-nowrap">全館再打八折</p>
      </div>
    </div>
    <div class="col mb-4 d-sm-flex justify-content-center pt-5">
      <div class="list-group fs-5 mx-2" v-for="item in type" :key="item">
        <button class="list-group-item list-group-item-action"
        type="button" :class="{active: active === item.engType}"
        @click="selectType(item.engType)">{{ item.chtType }}</button>
      </div>
    </div>
    <div class="col">
      <Loading :loading="isLoading"></Loading>
        <select class="border-dark d-sm-block rounded p-2 mb-4 ms-auto"
        v-model="selected" @change="getSort">
            <option v-for="item in sort" :key="item" :value="item.engSort"
            :disabled="item.engSort === 'filterSort'">
              {{ item.chtSort }}</option>
        </select>
      <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-3"
      v-if="filterProducts.length !== 0">
        <div class="col" v-for="item in filterProducts" :key="item.id">
          <div class="card h-100">
            <img :src="item.imageUrl" class="card-img-top" :alt="item.title">
            <button type="button" class="toggle border-0" @click="toggleFavorites(item)">
              <i class="bi bi-heart-fill" :class="{active: myFavorites.includes(item.id)}">
              </i>
            </button>
            <div class="card-body d-flex flex-column justify-content-between">
              <h3 class="card-title">
                <a href="#" class="stretched-link style"
                @click.prevent="getProduct(item.id)">{{ item.title }}</a>
              </h3>
            <div class="card-text d-flex justify-content-between align-items-center">
            <span class="text-dark text-decoration-line-through text-nowrap">
              ${{ $filters.currency(item.origin_price) }}</span>
            <span class="text-danger fw-bold fs-5 text-nowrap">
              ${{ $filters.currency(item.price) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center" v-else><p class="h3">查無資料，請重新搜尋關鍵字或等候上架。</p></div>
    </div>
  </div>
  <Cart class="position-fixed fixed"></Cart>
</template>

<style scoped lang="scss">
    img {
        height: 150px;
        position: relative;
        max-width: 100%;
        object-fit: cover;
        object-position: center center;
        @media(min-width: 768px) {
          height: 200px;
        }
    }
    .bannerImg {
        height: 250px;
        object-fit: cover;
        object-position: top center;
        @media(min-width: 768px) {
          height: 400px;
        }
    }
    .bg-special {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 24px;
    }
    .banner {
      position: relative;
      .bannerContent {
        position: absolute;
        top: 50%;
        left: 75%;
        padding: 10px;
        transform: translateY(-50%) translateX(-50%);
        @media(min-width: 576px) {
          left: 75%;
          padding: 20px;
          h3 {
            font-size: 36px;
          }
          p {
            font-size: 24px;
          }
        }
      }
    }
    .toggle {
      position: absolute;
      z-index: 2;
      top: 0;
      right: 0;
      padding: 10px;
      background-color: #bad5f6;
      border-bottom-right-radius: 24px;
      border-bottom-left-radius: 24px;
      i {
        color: #fff;
        font-size: 20px;
        &:hover {
          font-size: 24px;
          }
        &.active {
          color: #ee5ce6;
        }
      }
    }
    .card {
      position: relative;
      .style {
        color: #181b46;
        text-decoration:none;
        &:hover {
          color: #0dcaf0;
        }
      }
      &:hover {
        box-shadow: 5px 5px 6px #00000029;
      }
    }
    .fixed {
      bottom: 20%;
      right: 3%;
      z-index: 5;
    }
</style>

<script>
import errorHandler from '@/utils/errorHandler.js';
import Loading from '@/components/LoadingComponent.vue';
import Cart from '@/components/ShoppingCartIcon.vue';

export default {
  data() {
    return {
      products: [],
      product: {},
      filterProducts: [],
      myFavorites: [],
      isLoading: false,
      active: 'all',
      type: [
        { chtType: '全部', engType: 'all' },
        { chtType: '飼料', engType: 'feed' },
        { chtType: '罐頭', engType: 'canned' },
        { chtType: '玩具', engType: 'toy' },
        { chtType: '我的最愛', engType: 'favorites' },
      ],
      selected: 'filterSort',
      sort: [
        { chtSort: '排序篩選', engSort: 'filterSort' },
        { chtSort: '價格 : 低到高', engSort: 'lowPrice' },
        { chtSort: '價格 : 高到低', engSort: 'highPrice' },
      ],
    };
  },
  components: {
    Loading,
    Cart,
  },
  watch: {
    $route() {
      this.$router.go(0);
    },
  },
  methods: {
    async getShoppingProducts() {
      try {
        const getAllShoppingProducts = `${this.$apiUrl}/products/all`;
        this.isLoading = true;
        const res = await this.$http.get(getAllShoppingProducts);
        if (res.data.success) {
          this.products = res.data.products;
          this.filterProducts = this.products;
        } else {
          throw new Error('updateOrderFailed');
        }
      } catch (error) {
        errorHandler(this.$alert, error.message);
      } finally {
        this.isLoading = false;
      }
    },
    selectType(type) {
      this.active = type;
      if (type === 'all') {
        this.filterProducts = this.products;
      } else if (type === 'favorites') {
        this.filterProducts = this.products.filter((item) => {
          for (let i = 0; i < this.myFavorites.length; i += 1) {
            if (item.id === this.myFavorites[i]) {
              return true;
            }
          }
          return false;
        });
      } else {
        this.filterProducts = this.products.filter((item) => item.category === type);
      }
    },
    getSort() {
      if (this.selected === 'lowPrice') {
        this.filterProducts.sort((a, b) => a.price - b.price);
      } else if (this.selected === 'highPrice') {
        this.filterProducts.sort((a, b) => b.price - a.price);
      }
    },
    toggleFavorites(item) {
      console.log(1);
      const currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

      if (currentFavorites.includes(item.id)) {
        for (let i = 0; i < currentFavorites.length; i += 1) {
          if (currentFavorites[i] === item.id) {
            currentFavorites.splice(i, 1);
          }
        }
      } else {
        currentFavorites.push(item.id);
      }
      localStorage.setItem('favorites', JSON.stringify(currentFavorites));
      this.myFavorites = currentFavorites;
    },
    async getSearchFilterProducts() {
      const query = this.$route.query.search;
      await this.getShoppingProducts();
      if (query === '') {
        this.$alert('欄位不可為空白');
      } else {
        this.active = '';
        this.filterProducts = this.products.filter((item) => item.title.includes(query));
      }
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
  },
  async mounted() {
    if (this.$route.query.search === undefined) {
      await this.getShoppingProducts();
      const { category } = this.$route.query;
      if (category !== undefined) {
        this.selectType(category);
      }
    } else {
      await this.getSearchFilterProducts();
    }
    this.myFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  },
};
</script>
