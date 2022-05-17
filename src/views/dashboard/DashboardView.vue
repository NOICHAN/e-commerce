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
import Navbar from '@/components/NavbarDashboard.vue';
import Footer from '@/components/FooterComponent.vue';
import errorHandler from '@/utils/errorHandler.js';

export default {
  components: {
    Navbar,
    Footer,
  },
  methods: {
    async isLogin() {
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
        errorHandler(this.$alert, error.message);
      }
    },
  },
  async created() {
    await this.isLogin();
  },
};
</script>
