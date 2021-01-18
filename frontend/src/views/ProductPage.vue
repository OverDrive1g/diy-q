<template>
  <div>
    <Product :productId="$route.params.id" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Product from "@/components/Product.vue";
export default Vue.extend({
  name: "ProductPage",
  components:{
    Product
  },
  methods:{
  }
  
})

</script>
