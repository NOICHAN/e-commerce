<template>

  <img src="@/assets/images/coverCat-m.jpg" alt="cat">
  <router-link to="/user/list" class="btn btn-outline-warning fs-4">
  幫主子買禮物~
  <i class="bi bi-box-arrow-in-right ms-1"></i>
  </router-link>

</template>

<style scoped lang="scss">
img {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-size: cover;
}
a {
  color: #181b46;
  border-color: #181b46;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
