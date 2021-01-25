import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

import { productModule } from "./product";

Vue.use(Vuex);

export interface RootState {
  version: string;
}

const store: StoreOptions<RootState> = {
  state: {
    version: "0.0.1",
  },
  modules: {
    product: productModule,
  },
};
export default new Vuex.Store<RootState>(store);
