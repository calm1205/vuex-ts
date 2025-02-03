import { createStore } from "vuex";
import { countModule } from "./counter";

export const store = createStore({
  modules: {
    countModule,
  },
});
