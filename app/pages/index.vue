<script setup lang="ts">
definePageMeta({
  layout: "default",
  title: "Home",
  icon: "i-lucide-house",
  keys: ["home", "landing", "testimonials"],
  search: false,
})
</script>

<template>
  <UPage ref="homeWrapper" class="w-full overflow-x-hidden">
    <LpHero />
    <LazyLpSteps />
    <LazyLpFeatures />
    <LazyLpReviews />
  </UPage>
</template>
