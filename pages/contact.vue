<template>
  <div>
    <p class="placeholder-hero">
      Contact pages are a gateway to forging new relationships, the bridge
      connecting a business to its community, offering a beacon of accessibility
      that invites inquiries, feedback, and opportunities alike; they embody the
      open-door policy of the digital age, presenting a platform where voices
      can be heard, support can be sought, and personal connections can be
      nurtured. These pages serve as the unsung heroes of navigational
      simplicity, proudly bearing essential details like addresses, phone
      numbers, and maps, all the while hosting forms that stand ready to capture
      the essence of visitor inquiries with grace and promise prompt attention,
      making every user feel valued and every message important.
    </p>
  </div>
</template>

<script setup>
import pageTransitionDefault from "~/assets/scripts/pages/transitionDefault";
import pageSEO from "~/assets/scripts/pages/seo";

useSeoMeta(pageSEO({ title: "Contact" }));

definePageMeta({
  pageTransition: pageTransitionDefault(),
});
</script>
