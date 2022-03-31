<template>
  <router-view/>
</template>

<script>

export default {
  created() {
    // 從 cookie 取出 token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)petToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // token 加到 Headers 裡面
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user)
      .then((res) => {
        console.log(res);
        if (!res.data.success) {
          this.$router.push('/login');
        }
      });
  },
};
</script>
