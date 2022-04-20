<template>
  <div class="row py-5 bg-white">
    <div class="col-sm-3 col-lg-2 mb-4">
      <List></List>
    </div>
    <div class="col-sm-9 col-lg-10">
      <router-view/>
    </div>
  </div>
</template>

<script>
import List from '../components/ListComponent.vue';

export default {
  components: {
    List,
  },
};
</script>
