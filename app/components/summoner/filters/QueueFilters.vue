<script setup lang="ts">
const ms = useMatchStore()
</script>

<template>
  <Tabs
    v-model:model-value="ms.mf.queue"
    class="  w-120 max-w-120 ">
    <Field class="!p-0  gap-0">
      <IndicatorTabsList class="bg-transparent h-10   w-full grid grid-cols-[repeat(4,1fr)_0.5fr] ">
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

        <IndicatorTabsTrigger :value="-1">
          <icon
            name="ri:more-line"
            class="shrink-0 size-5.5 opacity-60 dst" />
        </IndicatorTabsTrigger>
      </IndicatorTabsList>
    </Field>

    <slot />
  </Tabs>
</template>
