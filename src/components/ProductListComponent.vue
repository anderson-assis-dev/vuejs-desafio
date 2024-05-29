<template>
  <div>
    <div class="table-responsive">
      <p>Total de registros encontrados: {{ filteredItems.length }}</p>

      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in paginatedItems" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ formatCurrency(item.sale_price) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1" class="btn btn-primary">Anterior</button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="btn btn-primary">Próxima</button>
    </div>
  </div>
</template>


<script>
import apiService from '../services/apiService';

export default {
  name: 'ProductListComponent',
  props: {
    searchQuery: String
  },
  data() {
    return {
      items: [],
      currentPage: 1,
      itemsPerPage: 10
    };
  },
  computed: {
    filteredItems() {
      if (!this.searchQuery) {
        return this.items;
      }
      const query = this.searchQuery.toLowerCase();
      return this.items.filter(item => item.name.toLowerCase().includes(query));
    },
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredItems.slice(start, end);
    }
  },
  methods: {
    fetchProducts() {
      apiService.getProducts(10, 100)
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
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  },
  watch: {
    searchQuery() {
      this.currentPage = 1; // Resetar para a primeira página ao fazer uma busca
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>


<style scoped>
.table-responsive {
  margin-top: 20px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 10px;
  padding: 5px 10px;
}

.pagination span {
  margin: 0 10px;
}
</style>

