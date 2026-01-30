<script lang="ts" setup>
const matchStore = useSummonerMatches()
const { filter, filteredMatches, matches } = storeToRefs(matchStore)
const blocks = computed(() => Math.round(matches.value.length / 20))
const numberModel = computed({
  get: () => filter.value.amount,
  set: val => s_matches().setFilter('amount', val),
})
</script>

<template>
  <NumberField
    v-model="numberModel"
    :step="10"
    :step-snapping="false"
    as-child
    @update:model-value="(e) => s_matches().setFilter('amount', e)"
  >
    <ButtonGroup class="flex max-w-34 gap-0!" orientation="horizontal">
      <NumberFieldDecrement class="fx-0!" size="sq-8" variant="base" />
      <NumberFieldInput class="text-sm" variant="base" size="8" />
      <NumberFieldIncrement class="fx-0!" size="sq-8" variant="base" />
    </ButtonGroup>
  </NumberField>
</template>
