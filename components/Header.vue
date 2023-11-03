<template>
  <header class="site-header">
    <HeaderNav />
    <Debug v-if="isDev" />
  </header>
</template>

<script setup>
const isDev = process.dev;
</script>

<style lang="scss" scoped>
.site-header {
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: 200px 200px auto;
  }
}
</style>
