<template>
  <Navbar></Navbar>
  <div class="mt container">
    <router-view/>
  </div>
  <Footer></Footer>
</template>

<style scoped lang="scss">
.mt {
  margin-top: 82px;
  @media(min-width: 576px){
      margin-top: 100px;
    }
}
</style>

<script>
import Navbar from '@/components/NavbarHome.vue';
import Footer from '@/components/FooterComponent.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
