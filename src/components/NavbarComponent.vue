<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-4 fixed-top">
    <div class="container-fluid h4 fw-bold">
      <h1>
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
            <router-link class="nav-link" to="/dashboard/products">產品</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/orders">訂單</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/coupons">優惠券</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">登入</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout">登出</a>
          </li>
        </ul>
      </div>
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
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/');
          }
        });
    },
  },
};
</script>
