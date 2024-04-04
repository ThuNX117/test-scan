<script setup>
import BarCodeScanner from './components/quaggajs/BarCodeScanner.vue';
import HTML5QRCODE from './components/quaggajs/HTML5QRCODE.vue';
</script>

<template>

  <main>
    <div class="container">
      <HTML5QRCODE />
      <BarCodeScanner />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.container {
  display: grid;
  grid-template-columns: 500px 500px;
  ;

  @media (max-width:1024px) {
    grid-template-columns: 100%;

  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
