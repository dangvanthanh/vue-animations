<template>
  <div>
    <button @click.prevent="morphing">Click</button>
    <svg viewBox="0 0 215 110">
      <polygon class="polymorph" points="215,110 0,110 0,0 49.3,0 215,0" />
    </svg>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  methods: {
    morphing() {
      anime({
        targets: '.polymorph',
        points: [
          { value: '215, 110 0, 110 0, 0 47.7, 0 67, 76' },
          { value: '215, 110 0, 110 0, 0 0, 0 67, 76' }
        ],
        easing: 'easeOutQuad',
        duration: 1200,
        loop: false
      });
    }
  }
};
</script>

<style>
.polymorph {
  fill: #398f5a;
}
</style>
