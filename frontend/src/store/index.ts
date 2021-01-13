import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    resources: [
      {
        name: "Beef - Roasted, Cooked",
        suppliers: [
          {
            id: "ad32851f-7d8b-4964-8c8a-5a53b3fc3b62",
            name: "Devpoint",
          },
          {
            id: "a03e4ace-4d8e-4364-9b17-4e1d84a60714",
            name: "Eamia",
          },
        ],
        maxPrice: 910.2,
        minPrice: 160.09,
        avgPrice: 750.8,
        countOnWarehouse: 130,
      },
      {
        name: "Onions - Cippolini",
        suppliers: [
          {
            id: "9bb6c737-78d5-47cf-be60-0762e16a8b4d",
            name: "Voolia",
          },
          {
            id: "035fd86f-bb60-49eb-b92d-90d612104ece",
            name: "Realbuzz",
          },
          {
            id: "895a9b3d-3ba3-4a17-ac50-53f34a76ff6b",
            name: "Jabbertype",
          },
        ],
        maxPrice: 303.53,
        minPrice: 507.34,
        avgPrice: 273.7,
        countOnWarehouse: 8,
      },
      {
        name: "Lid Coffee Cup 8oz Blk",
        suppliers: [
          {
            id: "d93df79c-5c2f-4b93-b92d-e53a118503e0",
            name: "Twitterbeat",
          },
          {
            id: "ff47ac4c-6a84-4d96-abef-0a509760d078",
            name: "Avavee",
          },
        ],
        maxPrice: 293.36,
        minPrice: 279.7,
        avgPrice: 145.56,
        countOnWarehouse: 87,
      },
      {
        name: "Filter - Coffee",
        suppliers: [
          {
            id: "593f7e85-faf2-43b2-ab26-74e6a7ff6e26",
            name: "Meedoo",
          },
          {
            id: "7666c40b-5d68-4c91-bd0d-496455f3559f",
            name: "Mymm",
          },
        ],
        maxPrice: 719.32,
        minPrice: 994.94,
        avgPrice: 156.01,
        countOnWarehouse: 139,
      },
      {
        name: "Oil - Pumpkinseed",
        suppliers: [
          {
            id: "038ed003-9e08-439b-95e6-482fab20cdd9",
            name: "Kimia",
          },
          {
            id: "5642299a-a28f-460d-bb66-c4a71e1a180c",
            name: "Centidel",
          },
          {
            id: "fe81ada9-9058-427a-a6cf-6cac5a58a590",
            name: "Zoozzy",
          },
        ],
        maxPrice: 346.21,
        minPrice: 666.7,
        avgPrice: 918.28,
        countOnWarehouse: 192,
      },
      {
        name: "Wine - Coteaux Du Tricastin Ac",
        suppliers: [
          {
            id: "3e9cbd49-7bb6-45ff-901e-ae286e677086",
            name: "Yakidoo",
          },
        ],
        maxPrice: 864.74,
        minPrice: 518.56,
        avgPrice: 202.81,
        countOnWarehouse: 89,
      },
      {
        name: "Wine - Mas Chicet Rose, Vintage",
        suppliers: [
          {
            id: "2d1924ee-68ab-4f5c-8be7-d8da2f859a01",
            name: "Zooxo",
          },
          {
            id: "83b3c9bc-0521-40e0-a758-6d44cc825a21",
            name: "Shufflester",
          },
          {
            id: "71223c24-82a3-437e-8835-4822b4d6c73d",
            name: "Dabvine",
          },
        ],
        maxPrice: 458.69,
        minPrice: 875.55,
        avgPrice: 397.5,
        countOnWarehouse: 105,
      },
      {
        name: "Bread - Bagels, Mini",
        suppliers: [
          {
            id: "bd82d954-9bec-4de6-8839-141a99fa51d5",
            name: "Trunyx",
          },
          {
            id: "c302844a-4685-4038-8ebd-a89f70df2e79",
            name: "Kwimbee",
          },
          {
            id: "5f476b5b-415c-4561-bf58-865e0dd5b3af",
            name: "Plajo",
          },
          {
            id: "c7f7bc8d-70cd-45ae-8866-3830fd353448",
            name: "Bubblebox",
          },
        ],
        maxPrice: 262.55,
        minPrice: 632.39,
        avgPrice: 938.43,
        countOnWarehouse: 195,
      },
      {
        name: "Goldschalger",
        suppliers: [
          {
            id: "c74f42e9-0c31-44e7-be04-350e79cfa525",
            name: "Jetpulse",
          },
        ],
        maxPrice: 347.58,
        minPrice: 488.69,
        avgPrice: 209.37,
        countOnWarehouse: 147,
      },
      {
        name: "Lid - 10,12,16 Oz",
        suppliers: [
          {
            id: "7c980de5-c9d4-4f60-9170-9070985c6f23",
            name: "Yambee",
          },
          {
            id: "133155d3-9569-44bd-8c44-1f498e575813",
            name: "Devbug",
          },
          {
            id: "eb07e2dc-8172-4f9d-976f-b9d841014a0c",
            name: "Zoombox",
          },
          {
            id: "85790104-cd13-495a-895d-58b46221ee59",
            name: "Browsetype",
          },
          {
            id: "f7ff1f21-6acc-47fe-8d2c-e5103fa2ce42",
            name: "Zoonoodle",
          },
        ],
        maxPrice: 883.18,
        minPrice: 253.04,
        avgPrice: 873.65,
        countOnWarehouse: 111,
      },
    ],
  },
  getters: {
    resourcesToTable: (state) => {
      return state.resources.map((i) => {
        const suppliers = i.suppliers.map((j) => j.name).join(", ");
        return { ...i, suppliers };
      });
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
