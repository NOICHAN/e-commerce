<template>
<router-link to="/user/list">產品列表</router-link>
</template>

<script>
export default {
  created() {
    this.$router.replace('/user/list');
  },
};
</script>
