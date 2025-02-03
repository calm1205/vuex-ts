import type { Module } from "vuex/types/index.d";

interface CounterState {
  count: number;
}

export const countModule: Module<CounterState, unknown> = {
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
