<template>
  <div class="table-responsive">
    <table class="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ formatCurrency(item.sale_price) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import apiService from '../services/apiService';

export default {
  name: 'TabelaComponent',
  data() {
    return {
      items: [],
    };
  },
  methods: {
    fetchProducts() {
      apiService.getProducts(10, 10)
        .then(response => {
          this.items = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar produtos:', error);
        });
    },
    formatCurrency(value) {
      return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>

<style scoped>
/* Adicione estilos personalizados se necessário */
</style>
