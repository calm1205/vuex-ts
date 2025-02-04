<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { mapGetters, mapActions } from "vuex";
import { store } from "./store/store";

export default {
  components: {
    HelloWorld,
  },
  methods: {
    ...mapActions("countModule", ["increment"]),
  },
  computed: {
    ...mapGetters("countModule", ["count"]),
  },
  mounted() {
    console.log(store.state.countModule?.count);
    console.log(this.$store.state.countModule?.count);
  },
};
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <button @click="increment">increment</button>
  <p>count is {{ count }}</p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
