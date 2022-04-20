<template>
<VLoading :active="isLoading"></VLoading>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
    <div class="col" v-for="item in filterProducts" :key="item.id">
      <div class="card h-100">
        <img :src="item.imageUrl" class="card-img-top" :alt="item.title">
        <div class="card-body">
          <h3 class="card-title">
            <router-link to="/" class="stretched-link">{{ item.title }}</router-link>
          </h3>
          <div class="card-text d-flex justify-content-between align-items-center">
            <span class="text-dark text-decoration-line-through">
              ${{ $filters.currency(item.origin_price) }}</span>
            <span class="text-danger fw-bold fs-5">
              ${{ $filters.currency(item.price) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    img {
        width: 100%;
        height: 200px;
    }
    a {
    color: #181b46;
    text-decoration:none;
    &:hover {
        color: #fd9735;
        }
      }
    .card-body {
        position: relative;
    }
</style>

<script>
export default {
  data() {
    return {
      filterProducts: [],
      isLoading: false,
    };
  },
  inject: ['emitter'],
  methods: {
    getFilterProducts() {
      this.isLoading = true;
      this.emitter.on('get-keywords', (item) => {
        console.log('1');
        this.filterProducts = item;
        this.isLoading = false;
        console.log('get-keywords', this.filterProducts);
      });
    },
  },
  created() {
    this.getFilterProducts();
  },
};

</script>
