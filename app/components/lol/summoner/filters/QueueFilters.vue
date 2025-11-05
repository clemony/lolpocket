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
    <TabsList
      base="indicator"
      class=" field-box h-10 w-full grid grid-cols-4">
      <TabIndicator />
      <TabsTrigger :value="0">
        All
      </TabsTrigger>

      <TabsTrigger :value="420">
        Solo
      </TabsTrigger>

      <TabsTrigger :value="440">
        Flex
      </TabsTrigger>

      <TabsTrigger :value="400">
        Normal
      </TabsTrigger>
      <!--
        <TabsTrigger :value="-1">
          <icon
            name="ri:more-line"
            class="shrink-0 size-5.5 opacity-60 dst" />
        </TabsTrigger> -->
    </TabsList>

    <slot />
  </Tabs>
</template>
