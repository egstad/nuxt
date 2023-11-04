<template>
  <div>
    <p class="placeholder-hero">About</p>
  </div>
</template>

<script setup>
import pageTransitionDefault from "~/assets/scripts/pages/transitionDefault";
import pageSEO from "~/assets/scripts/pages/seo";

useSeoMeta(pageSEO({ title: "About" }));

definePageMeta({
  pageTransition: pageTransitionDefault(),
});
</script>
