<template>
<Navbar></Navbar>
<div class="container-fluid bg-white mt"><router-view/></div>
<Footer></Footer>
</template>

<style scoped lang="scss">
.mt {
  margin-top: 65px;
  @media(min-width: 576px){
      margin-top: 78px;
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
  async created() {
    try {
      // 從 cookie 取出 token
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)petToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      // token 加到 Headers 裡面
      this.$http.defaults.headers.common.Authorization = token;
      const postCheckUrl = `${process.env.VUE_APP_API}api/user/check`;
      const res = await this.$http.post(postCheckUrl);
      if (!res.data.success) {
        this.$router.push('/user/login');
      }
    } catch (error) {
      this.$alert('1sorry，目前服務不可用，請稍後再試或聯絡管理員。');
    }
  },
};
</script>
