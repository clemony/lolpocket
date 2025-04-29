<script lang="ts" setup>

const tabs = ref('stats')
</script>

<template>
        <div class="flex gap-3 text-2 font-medium items-center"><!--
    <Tabs v-model:model-value="tabs" class="">
      <IndicatorTabsList class="bg-b2 text-2 w-full h-9 grid grid-cols-[0.75fr_1fr]">
        <IndicatorTabsTrigger value="stats"  class="text-bc/70">
          Stats
        </IndicatorTabsTrigger>

        <IndicatorTabsTrigger value="filters" class="text-bc/70">
          In Game
        </IndicatorTabsTrigger>
        <TabIndicator />
      </IndicatorTabsList>
    </Tabs> -->
<Switch  />
Live Match

</div>
</template>