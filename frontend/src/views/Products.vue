<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="products"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Products",
  data: () => {
    return {
      headers: [
        {
          text: "Наименование",
          value: "name",
        },
        { text: "Базовая цена", value: "basePrice" },
        { text: "Цена реализации", value: "price" },
      ],
      products: [
        { name: "Название 1", basePrice: 100, price: 150 },
        { name: "Название 2", basePrice: 100, price: 150 },
        { name: "Название 3", basePrice: 100, price: 150 },
        { name: "Название 4", basePrice: 100, price: 150 },
        { name: "Название 5", basePrice: 100, price: 150 },
        { name: "Название 6", basePrice: 100, price: 150 },
      ],
    };
  },
});
</script>
