<template>
    <VLoading :active="isLoading">
        <img src="@/assets/images/loadingCat.gif" alt="">
      </VLoading>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  watch: {
    loading() {
      this.isLoading = this.loading;
    },
  },
};
</script>
