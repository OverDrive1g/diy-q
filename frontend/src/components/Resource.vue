<template>
  <div class="">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <v-img height="200" src="https://picsum.photos/300/400"> </v-img>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <v-row>
            <v-col>
              <v-text-field v-model="product.name"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field v-model="product.price" required></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "Resource",
  props: ["reourceId"],
  data: () => {
    return {
      product: null,
    };
  },
  methods: {
    ...mapGetters({
      productById: "productById",
    }),
  },
  created() {
    //load res
  },
});
</script>
