<script setup lang="ts">
const cs = useChampStore()
</script>

<template>
  <Tabs v-model:model-value="cs.championFilter.position" class="w-64 -mt-0.5">
    <Field class="!px-4 py-0 gap-0 w-64 bg-b2/60 border-b3">
      <IndicatorTabsList class="bg-transparent grid-cols-[1fr_1fr_1.2fr_1fr_1fr_1.2fr] h-10 w-64">
        <IndicatorTabsTrigger
          v-for="position in championPositions"
          :key="position" :value="position" class="group place-items-center " :class="{'first-child:[&_svg]:!text-nc': !cs.championFilter.position }">
          <component
            :is="`i-roles-${position == null ? 'all' : position.toLowerCase()}`"
            class="h-4.5 w-auto dst shrink-0 text-bc/60 text-bc/60" :class="{'!text-nc ': position != null ? position.toLowerCase() == cs.championFilter.position : '' }"/>
        </IndicatorTabsTrigger>

        <TabIndicator contrast class=""/>
      </IndicatorTabsList>
    </Field>

    <slot />
  </Tabs>
</template>

<style scoped></style>
