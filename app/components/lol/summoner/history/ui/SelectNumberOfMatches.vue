<script lang="ts" setup>
const matchStore = useSummonerMatches()
const { matches } = storeToRefs(matchStore)
const store = useMatchFilters()
const { filter } = storeToRefs(store)

const blocks = computed(() => Math.round(matches.value.length / 20))
const numberModel = computed({
  get: () => filter.value.amount,
  set: (val) => store.setFilter("amount", val),
})
</script>

<template>
  <UInputNumber
    v-model="numberModel"
    :step="10"
    :step-snapping="false"
    as-child
    @update:model-value="
      (e: number | null) => store.setFilter('amount', e ?? undefined)
    ">
    <!--     <UButtonGroup class="flex max-w-34 gap-0!" orientation="horizontal">
      <NumberFieldDecrement class="fx-0!" size="sq-8" variant="base" />
      <NumberFieldInput class="text-sm" variant="base" size="8" />
      <NumberFieldIncrement class="fx-0!" size="sq-8" variant="base" />
    </UButtonGroup> -->
  </UInputNumber>
</template>
