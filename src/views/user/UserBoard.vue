<template>
  <Navbar></Navbar>
  <div class="mt container">
    <router-view/>
  </div>
  <Footer></Footer>
</template>

<style scoped lang="scss">
.mt {
  margin-top: 90px;
  @media(min-width: 576px){
      margin-top: 108px;
    }
}
</style>

<script>
import Navbar from '../../components/NavbarHome.vue';
import Footer from '../../components/FooterComponent.vue';
import emitter from '../../methods/emitter';

export default {
  components: {
    Navbar,
    Footer,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
