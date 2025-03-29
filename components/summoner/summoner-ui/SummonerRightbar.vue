<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <transition-slide group as="div" class="w-full flex  flex-col gap-6 overflow-hidden pt-22 px-3">
    <ResearchHeader />

    <div v-if="route.path.match(/research/)" class="flex flex-col">
    <Separator class="bg-b2" />
      <ResearchNavTabs />

    </div>
    <QueueRadio />
    <div class="w-full px-2">
      <PositionRadio />
    <Separator class="bg-b2" />

    </div>
    <div class="px-8 mt-2">
      <PatchSelectRadio />
      </div>
  </transition-slide>
</template>