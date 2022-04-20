<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-4
  fixed-top flex-wrap justify-content-center">
    <div class="container-fluid h4 fw-bold">
      <h1 class="mb-0">
        <router-link class="navbar-brand border-0 logo" to="/">毛孩一家一</router-link>
      </h1>
      <button class="navbar-toggler fs-3" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/user/list/all">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/user/login">員工登入</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="d-flex w-75 rounded-pill bg-secondary">
        <input class="form-control bg-secondary border-0 w-100 rounded-pill"
        type="search" placeholder="請輸入關鍵字" aria-label="Search" v-model="keywords">
        <button class="border-0 px-3 rounded-pill" type="button" @click="searchKeywords">
          <i class="bi bi-search"></i>
        </button>
    </div>
  </nav>
</template>

<style scoped lang="scss">
a {
    color: #aaa;

    &:hover {
        border-bottom: 3px solid #fff;
        }

    &.active {
        color: #fff;
        border-bottom: 3px solid #fff;
        }
}
input[type="search"]:focus {
  border-color: #ececec;
  box-shadow: 0 1px 1px #ececec inset;
}
.logo {
    width: 200px;
    height: 54px;
    display: block;
    background-image: url('@/assets/images/logoCat-s.png');
    text-indent: 101%;
    white-space: nowrap;
    overflow: hidden;
    @media(min-width: 576px){
      width: 300px;
      height: 81px;
      background-image: url('@/assets/images/logoCat-m.png');
    }
}
</style>

<script>
export default {
  data() {
    return {
      products: [],
      filterProducts: [],
      keywords: '',
    };
  },
  inject: ['emitter'],
  methods: {
    searchKeywords() {
      if (this.keywords === '') {
        this.$alert('欄位不可為空白');
      } else {
        this.filterProducts = this.products.filter((item) => {
          const titleResult = item.title.search(this.keywords);
          const categoryResult = item.category.search(this.keywords);
          if (titleResult === -1 && categoryResult === -1) {
            return false;
          }
          return true;
        });
        this.emitter.emit('get-keywords', this.filterProducts);
        this.$router.push('/user/list/search');
      }
    },
    getShoppingProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
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
