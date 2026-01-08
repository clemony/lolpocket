<script setup lang="ts">
const { filter, setFilter, } = useSummonerInject()

const queueModel = computed({
  get: () => filter?.value?.queue,
  set: val => setFilter('queue', val),
})
const tabClass = '!text-bc'
</script>

<template>
  <Tabs
    v-model:model-value="queueModel"
    :default-value="0"
    class="w-full">
    <TabsList
      class="">
      <TabIndicator />
      <TabsTrigger
        :class="tabClass"
        :value="0">
        All
      </TabsTrigger>

      <TabsTrigger
        :class="tabClass"
        :value="420">
        Solo
      </TabsTrigger>

      <TabsTrigger
        :class="tabClass"
        :value="440">
        Flex
      </TabsTrigger>

      <TabsTrigger
        :class="tabClass"
        :value="400">
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
