<script setup lang="ts">
import { championPositions } from '#shared/appdata'

const { filtered, filters, setFilter } = useItemFilter()
</script>

<template>
  <Tabs
    v-model:model-value="filters.position"
    class="w-64">
    <Field class="!px-0 py-0 gap-0 w-64 bg-b2/80 border-b3 h-10 m-0 rounded-xl">
      <TabsList
        base="indicator"
        class="bg-transparent grid-cols-[1fr_1fr_1.2fr_1fr_1fr_1.2fr] h-10 w-64">
        <TabsTrigger
          v-for="position in championPositions"
          :key="position.name"
          :value="position.name"
          class="group place-items-center !text-nc">
          <component
            :is="`i-roles-${position.name.toLowerCase()}`"
            class="h-4.5 w-auto dst shrink-0 z-10 text-bc/60"
            :class="{ '**:!text-nc ': position === filters.position }" />
        </TabsTrigger>

        <TabIndicator
          contrast
          class="" />
      </TabsList>
    </Field>

    <slot />
  </Tabs>
</template>

<style scoped></style>
