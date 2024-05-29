<template>
  <div class="container">
      <SearchComponent v-model:searchQuery="searchQuery" />
      <ProductListComponent  :searchQuery="searchQuery" />
  </div>
</template>

<script>

import ProductListComponent from './components/ProductListComponent.vue';
import SearchComponent from './components/SearchComponent.vue';
export default {
  name: 'App',
  components: {
    ProductListComponent,
    SearchComponent
  },
  data() {
    return {
      searchQuery: ''
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
