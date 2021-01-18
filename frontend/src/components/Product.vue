<template>
  <div>

    loh
    {{ productById()(productId) }}
    {{ typeof productId }}
  </div>
</template>

<script lang="ts">

import Vue from "vue";
import {mapGetters} from "vuex";

export default Vue.extend({
  name: "Product",
  props:{
    productId: Number
  },
  methods:{
    ...mapGetters({
      productById: "productById"
    })
  }
})
</script>
