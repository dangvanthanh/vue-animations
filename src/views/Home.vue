<template>
  <div>
    <router-link tag="a" :to="{ name: 'box' }">Box</router-link>
    <router-link tag="a" :to="{ name: 'revealing' }">Revealing</router-link>
  </div>
</template>

<script>
export default {
  name: 'home'
};
</script>

<style></style>
