<script lang="ts" setup>
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
    color="transparent"
    size="sm"
    :ui="{
      root: 'h-10 w-full',
      label: 'hidden',
    }"
    :items="roles"
    value-key="label"
    default-value="all" />
</template>
