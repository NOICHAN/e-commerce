<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-4
  fixed-top flex-wrap justify-content-center">
    <div class="container-fluid h4 fw-bold">
      <h1 class="mb-0">
        <router-link class="navbar-brand border-0 logo" to="/">毛孩一家一</router-link>
      </h1>
      <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/user/list">商品</router-link>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#"
          id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Q&A
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item"
            to="/user/paymentQuestion">付款相關問題</router-link></li>
            <li><router-link class="dropdown-item"
            to="/user/transportQuestion">運送相關問題</router-link></li>
            <li><router-link class="dropdown-item"
            to="/user/returnsQuestion">退換貨說明</router-link></li>
          </ul>
        </li>
        </ul>
      </div>
    </div>
    <div class="d-flex w-75 rounded-pill bg-secondary height">
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
.height {
  height: 25px;
  @media(min-width: 576px){
      height: 30px;
    }
}
.logo {
    width: 150px;
    height: 41px;
    display: block;
    background-image: url('@/assets/images/logoCat-s.png');
    text-indent: 101%;
    white-space: nowrap;
    overflow: hidden;
    @media(min-width: 576px){
      width: 200px;
      height: 54px;
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
  methods: {
    searchKeywords() {
      this.$router.replace({
        path: '/user/list',
        query: { search: this.keywords },
      });
    },
  },
};
</script>
