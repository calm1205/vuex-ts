import { createStore } from "vuex";
import { countModule, type CountState } from "./module/countModule";
import { globalCount } from "./global/globalCount";
import { globalOrder } from "./global/globalOrder";
import { orderModule, type OrderState } from "./module/orderModule";

interface GlobalState {
  globalCount: typeof globalCount;
  globalOrder: typeof globalOrder;
}
export type State = GlobalState & { countModule?: CountState } & {
  orderModule?: OrderState;
};

export const store = createStore<State>({
  state: {
    globalCount,
    globalOrder,
  },
  modules: {
    countModule,
    orderModule,
  },
});
