<template>
  <div id="app">
    <button-selector :options="['a', 'b', 'c']"> </button-selector>
  </div>
</template>

<script>
import ButtonSelector from "./components/ButtonSelector.vue";

export default {
  name: "App",

  components: {
    ButtonSelector
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
