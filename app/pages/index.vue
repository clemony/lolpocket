<script setup lang="ts">
definePageMeta({
  name: "home",
  layout: "default",
  path: "/",
  search: "hidden",
  title: "lolpocket",
  icon: "i-lucide-house",
  searchKeys: ["home", "landing", "testimonials"],
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
