<script lang="ts" setup>
const {
  class: className,
  orientation = 'horizontal',
} = defineProps<{
  class?: HTMLAttributes['class']
  orientation?: DataOrientation
}>()

const { summoner } = storeToRefs(s_session())
const store = useMatchFilters()
const { filter } = storeToRefs(store)

const roles = computed(() => {
  if (!s_matches().matches || !summoner?.value) return []

  const matchRoles = useMatchRoles(summoner?.value?.puuid, s_matches().matches)

  return mapPositions.map((p) => {
    const find = matchRoles?.find(r => r.name === p.name)
    return {
      ...p,
      disabled: p.name === 'all' ? false : !find?.games
    }
  })
})

const roleModel = computed({
  get: () => filter?.value.role ?? 'all',
  set: val => store.setFilter('role', val ?? 'all'),
})
</script>

<template>
  <UTabs
    v-model:model-value="roleModel"
    class="h-10 w-full"
    :items="roles"
    value-key="name"
    default-value="all" />
</template>
