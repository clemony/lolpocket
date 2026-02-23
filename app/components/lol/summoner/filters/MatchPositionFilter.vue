<script lang="ts" setup>
import { useMatchRoles } from "~/domain/match/useMatchRoles"
import { mapPositions } from "#shared/constants/misc/positions"

const { class: className, orientation = "horizontal" } = defineProps<{
  class?: HTMLAttributes["class"]
  orientation?: DataOrientation
}>()

const { summoner } = storeToRefs(sSession())
const store = matchFilter()
const { filter } = storeToRefs(store)

const roles = computed(() => {
  if (!sMatches().matches || !summoner?.value) return []

  const matchRoles = useMatchRoles(summoner?.value?.puuid, sMatches().matches)

  return mapPositions.map((p) => {
    const find = matchRoles?.find((r) => r.name === p.label)
    return {
      ...p,
      disabled: p.label === "all" ? false : !find?.games,
    }
  })
})

const roleModel = computed({
  get: () => filter?.value.role ?? "all",
  set: (val) => store.setFilter("role", val ?? "all"),
})
</script>

<template>
  <UTabs
    v-model:model-value="roleModel"
    size="sm"
    :ui="{
      root: ' w-full',
      label: 'hidden',
      leadingIcon: 'size-4.5',
    }"
    :items="roles"
    value-key="label"
    default-value="all" />
</template>
