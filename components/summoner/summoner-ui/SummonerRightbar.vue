<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <transition-slide group as="div" class="w-full flex  flex-col gap-8 overflow-hidden pt-22 px-3">
    <ResearchHeader />
    <Separator class="bg-b2" />

    <div v-if="route.path.match(/\/summoner\/research/)" class="flex flex-col">
      <ResearchNavTabs />

      <Separator class="bg-b2" />
      <PatchSelectDropdown />
    </div>
    <QueueRadio />
    <Separator class="bg-b2" />
    <div class="w-full px-2">
      <PositionRadio />
    </div>
  </transition-slide>
</template>