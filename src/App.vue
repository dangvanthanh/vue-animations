<template>
  <div id="app">
    <router-view></router-view>
    <router-link tag="a" :to="{ name: 'home' }">Back to home</router-link>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
