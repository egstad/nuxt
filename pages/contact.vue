<template>
  <div>
    <h2>Contact</h2>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import pageTransitionDefault from "~/assets/scripts/pages/transitionDefault";

const nuxtApp = useNuxtApp();
definePageMeta({
  pageTransition: pageTransitionDefault(),
});

onMounted(() => {
  nextTick(() => nuxtApp.$dimensions.set());
});
</script>
