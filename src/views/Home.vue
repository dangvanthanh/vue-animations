<template>
  <div>
    <router-link
      tag="a"
      v-for="link in links"
      :key="link.id"
      :to="{ name: link.name }"
      class="block text-black no-underline"
    >
      {{ link.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      links: [
        { id: 1, name: 'box', title: 'Box' },
        { id: 2, name: 'revealing', title: 'Revealing' },
        { id: 3, name: 'basic', title: 'Basic' }
      ]
    };
  }
};
</script>

<style></style>
