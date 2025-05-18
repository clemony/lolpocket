<script setup lang="ts">
const cs = useChampStore()
</script>

<template>
  <Tabs v-model:model-value="cs.championFilter.position" class="w-64 ">
    <Field class="!px-0 py-0 gap-0 w-64 bg-b2/80 border-b3 h-10 m-0 rounded-xl">
      <IndicatorTabsList class="bg-transparent grid-cols-[1fr_1fr_1.2fr_1fr_1fr_1.2fr] h-10 w-64">
        <IndicatorTabsTrigger
          v-for="position in championPositions"
          :key="position" :value="position" class="group place-items-center !text-nc">
          <component
            :is="`i-roles-${position == null ? 'all' : position.toLowerCase()}`"
            class="h-4.5 w-auto dst shrink-0 z-10 text-bc/60" :class="{ '**:!text-nc ': position == cs.championFilter.position }" />
        </IndicatorTabsTrigger>

        <TabIndicator contrast class="" />
      </IndicatorTabsList>
    </Field>

    <slot />
  </Tabs>
</template>

<style scoped></style>
