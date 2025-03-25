<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <transition-slide group as="div" class="w-full flex  flex-col gap-8 overflow-hidden pt-22 px-3">
    <div class="size-fit">
    </div>
    <AnalysisHeader />
    <Separator class="bg-b2" />

    <div v-if="route.path.match(/\/summoner\/analysis/)" class="flex flex-col">
      <RightbarLink to="/analysis">
        Items
      </RightbarLink>

      <RightbarLink to="/analysis/champions">
        Champions
      </RightbarLink>

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