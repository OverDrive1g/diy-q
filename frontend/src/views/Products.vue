<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="products"
      :items-per-page="5"
      class="elevation-1"
      v-on:click:row="navTo"
    ></v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapState} from "vuex";

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
    };
  },
  computed:{
    ...mapState(['products'])
  },
  methods:{
    navTo(clickedProduct:any){
      this.$router.push(`/product/${clickedProduct.id}`)
      console.log(clickedProduct)
    }
  }
});
</script>
