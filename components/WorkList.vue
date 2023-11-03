<template>
  <pre>
    {{ work }}
  </pre>
</template>

<script setup>
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "n1gghco9",
  dataset: "production",
  apiVersion: "2023-11-01",
  useCdn: true, // Use the CDN for read-only data
});

const { data: work } = await useAsyncData("work", () => {
  return client.fetch('*[_type == "work"]');
});
</script>
