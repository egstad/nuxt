<template>
  <div>
    <p class="placeholder-hero">Index</p>
  </div>
</template>

<script setup>
import pageTransitionDefault from "~/assets/scripts/pages/transitionDefault";
import pageSEO from "~/assets/scripts/pages/seo";

definePageMeta({
  pageTransition: pageTransitionDefault(),
});

useSeoMeta(pageSEO({ title: "Index" }));
</script>
