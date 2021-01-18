import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Orders from "../views/Orders.vue";
import Products from "../views/Products.vue";
import Resources from "../views/Resources.vue";
import Suppliers from "../views/Suppliers.vue";
import Warehouses from "../views/Warehouses.vue";
import ProductPage from "../views/ProductPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders
  },
  {
    path: "/products",
    name: "Products",
    component: Products
  },
  {
    path: "/product/:id",
    name: "Product",
    component: ProductPage
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources
  },
  {
    path: "/suppliers",
    name: "Suppliers",
    component: Suppliers
  },
  {
    path: "/warehouses",
    name: "Warehouses",
    component: Warehouses
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
