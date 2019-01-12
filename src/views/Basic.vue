<template>
  <div>
    <h1>Basic</h1>
    <div>
      <div class="el" data-x="470"></div>
      <div class="el" data-x="280"></div>
      <div class="el" data-x="670"></div>
    </div>
    <div>
      <div class="el1" data-x="470"></div>
      <div class="el1" data-x="280"></div>
      <div class="el1" data-x="670"></div>
      <div class="el1" data-x="470"></div>
      <div class="el1" data-x="280"></div>
      <div class="el1" data-x="670"></div>
      <div class="el1" data-x="470"></div>
      <div class="el1" data-x="280"></div>
      <div class="el1" data-x="670"></div>
      <div class="el1" data-x="470"></div>
      <div class="el1" data-x="280"></div>
      <div class="el1" data-x="670"></div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'Basic',
  mounted() {
    const els = document.querySelectorAll('.el');
    const els1 = document.querySelectorAll('.el1');

    anime({
      targets: els,
      // // translateX: 270,
      // background: '#444',
      // borderRadius: ['0', '50%'],
      // easing: 'easeInOutQuad',
      // // duration: 3000
      // // delay: 1000
      // translateX: {
      //   value: 250,
      //   duration: 800
      // },
      // rotate: {
      //   value: 360,
      //   duration: 1800,
      //   easing: 'easeInOutSine'
      // },
      // scale: {
      //   value: 2,
      //   duration: 1600,
      //   delay: 800,
      //   easing: 'easeInOutQuart'
      // },
      // delay: 250
      translateX: function(el) {
        return el.getAttribute('data-x');
      },
      translateY: function(el, i) {
        return 50 + -50 * i;
      },
      scale: function(el, i, l) {
        return l - i + 0.25;
      },
      rotate: function() {
        return anime.random(-360, 360);
      },
      borderRadius: function() {
        return ['50%', anime.random(10, 35) + '%'];
      },
      duration: function() {
        return anime.random(1200, 1800);
      },
      delay: function() {
        return anime.random(0, 400);
      },
      direction: 'alternate',
      loop: true
    });

    anime({
      targets: els1,
      // translateX: 250,
      // rotate: anime.stagger([-360, 360]),
      // easing: 'linear'
      scale: 0.1,
      delay: anime.stagger(200, { grid: [14, 5], from: 'center' }),
      easing: 'easeInOutQuad',
      loop: true
    });
  }
};
</script>

<style>
.el,
.el1 {
  background: red;
  width: 3rem;
  height: 3rem;
  margin: 0.5rem;
}

.el1 {
  display: inline-block;
}
</style>
