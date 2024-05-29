<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <SearchComponent v-model:searchQuery="searchQuery" />
      <TabelaComponent  :searchQuery="searchQuery" />
    </div>
   
  </div>
</template>

<script>
import TabelaComponent from './TabelaComponent.vue';
import SearchComponent from './SearchComponent.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    TabelaComponent,
    SearchComponent
  },
  data() {
    return {
      searchQuery: ''
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
