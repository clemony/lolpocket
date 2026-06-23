<script lang="ts" setup>
import type { SelectItem, SelectProps, TabsProps } from "@nuxt/ui"
import { useMatchPositions } from "~/domain/summoner/composables/match/useMatchPositions"

const props = withDefaults(defineProps<SelectProps>(), {
  size: "md",
})

const { summoner } = storeToRefs(sSession())
const store = matchFilter()
const { filter } = storeToRefs(store)

const positions = computed(() => {
  if (!sMatches().matches || !summoner?.value) return []

  const matchPositions = useMatchPositions(
    summoner?.value?.puuid,
    sMatches().matches
  )

  return matchPositions as SelectItem[]
})

const positionModel = computed({
  get: () => filter?.value.position ?? "all",
  set: (val) => store.setFilter("position", val ?? "all"),
})
</script>

<template>
  <USelect
    v-bind="props"
    v-model:model-value="positionModel"
    value-key="label"
    label-key="label"
    :icon="`i-lp-${positionModel?.toLowerCase()}`"
    :content="{ position: 'item-aligned' }"
    :items="positions" />
</template>
