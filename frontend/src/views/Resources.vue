<template>
  <div class="">
    <v-data-table
      :headers="headers"
      :items="resourcesToTable"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from "vuex";

export default Vue.extend({
  name: "Resources",
  data: () => {
    return {
      headers: [
        {
          text: "Наименование",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Поставщики", value: "suppliers" },
        { text: "Макс. цена", value: "maxPrice" },
        { text: "Мин. цена", value: "minPrice" },
        { text: "Ср. цена", value: "avgPrice" },
        { text: "Кол-во на складах", value: "countOnWarehouse" },
      ],
    };
  },
  computed: {
    ...mapState(["resources"]),
    ...mapGetters(["resourcesToTable"]),
  },
});
</script>
