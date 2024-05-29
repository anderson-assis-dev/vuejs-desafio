<template>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar por nome do produto"
        :value="searchQuery"
        @input="onInput"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchComponent',
    props: {
      searchQuery: String
    },
    methods: {
      onInput(event) {
        this.$emit('update:searchQuery', event.target.value);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Adicione estilos personalizados se necessário */
  </style>
  