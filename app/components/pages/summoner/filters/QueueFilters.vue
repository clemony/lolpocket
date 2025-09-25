<script setup lang="ts">
const state = useSummonerInject()

const queueModel = computed({
  get: () => state.filter.value.queue,
  set: val => state.setFilter('queue', val),
})
</script>

<template>
  <Tabs
    v-model:model-value="queueModel"
    :default-value="0"
    class="w-120 max-w-120">
    <IndicatorTabsList class=" field-box h-10 w-full grid grid-cols-4">
      <TabIndicator />
      <IndicatorTabsTrigger :value="0">
        All
      </IndicatorTabsTrigger>

      <IndicatorTabsTrigger :value="420">
        Solo
      </IndicatorTabsTrigger>

      <IndicatorTabsTrigger :value="440">
        Flex
      </IndicatorTabsTrigger>

      <IndicatorTabsTrigger :value="400">
        Normal
      </IndicatorTabsTrigger>
      <!--
        <IndicatorTabsTrigger :value="-1">
          <icon
            name="ri:more-line"
            class="shrink-0 size-5.5 opacity-60 dst" />
        </IndicatorTabsTrigger> -->
    </IndicatorTabsList>

    <slot />
  </Tabs>
</template>
