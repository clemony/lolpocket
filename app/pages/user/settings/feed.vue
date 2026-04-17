<script setup lang="ts">
definePageMeta({
  title: "Feed",
  description: "Control what news and updates you see.",
  icon: "i-lucide-rss",
  order: 4,
  path: "/settings/feed",
  prefix: "Settings"
})
</script>

<template>
  <FeedSettings />
</template>
