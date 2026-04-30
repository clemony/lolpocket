<script setup lang="ts">
definePageMeta({
  title: "Feed",
  description: "Control what news and updates you see.",
  icon: "i-lucide-rss",
  order: 4,
  layout: "settings-layout",
  path: "/settings/feed",
  prefix: "Settings"
})
</script>

<template>
  <FeedSettings />
</template>
