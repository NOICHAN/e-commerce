<template>
  <nav class="bg-primary">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">login</router-link>
  </nav>
  <div class="bg-secondary py-5">
    <router-view/>
  </div>
  <footer>
    <p class="bg-primary">123456</p>
  </footer>
</template>

<style lang="scss">
@import './assets/main';
</style>
