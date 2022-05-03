<template>
<Navbar></Navbar>
<div class="container-fluid bg-white mt"><router-view/></div>
<Footer></Footer>
</template>

<style scoped lang="scss">
.mt {
  margin-top: 78px;
  @media(min-width: 576px){
      margin-top: 105px;
    }
}
</style>

<script>
import Navbar from '../../components/NavbarDashboard.vue';
import Footer from '../../components/FooterComponent.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
  created() {
    // 從 cookie 取出 token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)petToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // token 加到 Headers 裡面
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/user/login');
        }
      });
  },
};
</script>
