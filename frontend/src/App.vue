<template>
  <v-app>
    <v-navigation-drawer v-model="isDrawerOpen" temporary app>
      <v-list-item v-on:click="$router.push('/')">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Главная</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-on:click="$router.push('/products')">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Продукция</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-on:click="$router.push('/orders')">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Заказы</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-on:click="$router.push('/resources')">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Ресурсы</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-on:click="$router.push('/warehouses')">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Склады</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-on:click="$router.push('/suppliers')">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Поставщики</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase" v-on:click="$router.push('/')">

        <span class="font-weight-light">diy-q</span>

      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",


  data: () => ({
    isDrawerOpen:false
  })
});
</script>
