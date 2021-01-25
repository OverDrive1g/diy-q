import { Product } from "@/core/domain/product";
import { Module } from "vuex";

import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { RootState } from "..";

export interface ProductState {
  products: Product[];
}
export const state: ProductState = {
  products: [],
};
const namespaced = true;

export const productModule: Module<ProductState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
