<template>
  <div class="boxes">
    <div class="boxes__inner">
      <div v-for="box in 12" :key="box" class="box" ref="box"></div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Box',
  props: {
    msg: String
  },
  mounted() {
    anime({
      targets: this.$refs.box,
      scale: {
        value: 2,
        transition: 'linear',
        duration: 1000
      },
      translateY: [150, 50],
      backgroundColor: (el, i) => {
        const r = 58 + i * 12;
        const g = 35 + i * 12;
        const b = 220;
        const color = `rgb(${r}, ${g}, ${b})`;
        return color;
      },
      duration: 1800,
      easing: 'easeOutElastic',
      elasticity: 500,
      delay: (el, i) => i * 20,
      loop: true,
      direction: 'alternate'
    });
  }
};
</script>

<style scoped>
.box {
  width: 50px;
  height: 150px;
}

.boxes {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.boxes__inner {
  display: flex;
  overflow: hidden;
  height: 165px;
}
</style>
