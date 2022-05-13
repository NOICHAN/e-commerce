<template>
  <div class="row py-5 bg-white">
    <div class="col-sm-3 col-lg-2 mb-4">
      <div class="list-group fs-5" v-for="item in type" :key="item">
        <button class="list-group-item list-group-item-action"
        type="button" :class="{active: active === item.engType}"
        @click="selectType(item.engType)">{{ item.chtType }}</button>
      </div>
    </div>
    <div class="col-sm-9 col-lg-10">
      <VLoading :active="isLoading"></VLoading>
        <select class="border-dark d-md-block rounded p-2 mb-4 ms-auto"
        v-model="selected" @change="getSort">
            <option v-for="item in sort" :key="item" :value="item.engSort">
              {{ item.chtSort }}</option>
        </select>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"
      v-if="filterProducts.length !== 0">
        <div class="col" v-for="item in filterProducts" :key="item.id">
          <div class="card h-100">
            <img :src="item.imageUrl" class="card-img-top w-100" :alt="item.title">
            <div class="card-body d-flex flex-column justify-content-between">
              <h3 class="card-title">
                <a href="#" class="stretched-link style"
                @click.prevent="getProduct(item.id)">{{ item.title }}</a>
              </h3>
            <div class="card-text d-flex justify-content-between align-items-center">
            <span class="text-dark text-decoration-line-through">
              $ {{ $filters.currency(item.origin_price) }}</span>
            <span class="text-danger fw-bold fs-5">
              $ {{ $filters.currency(item.price) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center" v-else><p class="h3">查無資料，請重新搜尋關鍵字或等候上架。</p></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    img {
        height: 200px;
    }
    .style {
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
      product: {},
      filterProducts: [],
      isLoading: false,
      active: 'all',
      type: [
        { chtType: '全部', engType: 'all' },
        { chtType: '飼料', engType: 'feed' },
        { chtType: '罐頭', engType: 'canned' },
        { chtType: '玩具', engType: 'toy' },
      ],
      selected: 'filterSort',
      sort: [
        { chtSort: '排序篩選', engSort: 'filterSort' },
        { chtSort: '價格 : 低到高', engSort: 'lowPrice' },
        { chtSort: '價格 : 高到低', engSort: 'highPrice' },
      ],
    };
  },
  watch: {
    $route() {
      this.$router.go(0);
    },
  },
  methods: {
    async getShoppingProducts() {
      try {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
        this.isLoading = true;
        const res = await this.$http.get(api);
        if (res.data.success) {
          this.products = res.data.products;
          this.filterProducts = this.products;
        }
      } catch (error) {
        this.$alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
      } finally {
        this.isLoading = false;
      }
    },
    selectType(type) {
      this.active = type;
      if (type === 'all') {
        this.filterProducts = this.products;
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
    async getSearchFilterProducts() {
      const query = this.$route.query.search;
      await this.getShoppingProducts();
      if (query === '') {
        this.$alert('欄位不可為空白');
      } else {
        this.active = '';
        this.filterProducts = this.products.filter((item) => {
          const titleResult = item.title.search(query);
          if (titleResult === -1) {
            return false;
          }
          return true;
        });
      }
      console.log(this.filterProducts);
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
  },
  async created() {
    if (this.$route.query.search === undefined) {
      await this.getShoppingProducts();
    } else {
      await this.getSearchFilterProducts();
    }
  },
};

</script>
