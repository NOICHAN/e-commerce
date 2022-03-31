<template>
  <Navbar></Navbar>
  <div class="bg-secondary py-5 mt">
    <router-view/>
  </div>
  <Footer></Footer>
</template>

<style scoped lang="scss">
.mt {
  margin-top: 86px;
  @media(min-width: 576px){
      margin-top: 113px;
    }
}
</style>

<script>
import Navbar from './components/NavbarComponent.vue';
import Footer from './components/FooterComponent.vue';

export default {
  components: {
    Footer,
    Navbar,
  },
};
</script>
