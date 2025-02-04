declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

import { ComponentCustomProperties } from "vue";
import { State } from "./store/store";
import { Store } from "vuex";

declare module "vue" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
