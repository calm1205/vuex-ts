import type { Module } from "vuex/types/index.d";

export interface CountState {
  count: number;
}

export const countModule: Module<CountState, unknown> = {
  namespaced: true,
  state: () => ({ count: 0 }),
  mutations: {
    increment: (state) => state.count++,
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
  },
  getters: {
    count(state) {
      return state.count;
    },
  },
};
