<template>
  <div>
    <nav class="bg-teal">
      <div class="container mx-auto">
        <h1 class="py-2 m-0">
          <router-link
            tag="a"
            :to="{ name: 'home' }"
            class="text-base text-black no-underline"
            >Vue Animations</router-link
          >
        </h1>
      </div>
    </nav>
    <div class="container mx-auto mt-8"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
