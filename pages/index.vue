<template>
  <div>
    <p>Lets see if sanity is working for us or not...</p>
    <WorkList />
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
