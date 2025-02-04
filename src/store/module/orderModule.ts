import type { Module } from "vuex/types/index.d";

export interface OrderState {
  order: number;
}

export const orderModule: Module<OrderState, unknown> = {
  namespaced: true,
  state: () => ({ order: 0 }),
  mutations: {
    increment: (state) => state.order++,
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
  },
  getters: {
    order(state) {
      return state.order;
    },
  },
};
