<script lang="ts" setup>
const {
  class: className,
  orientation = 'horizontal',
} = defineProps<{
  class?: HTMLAttributes['class']
  orientation?: DataOrientation
}>()
const { summoner } = storeToRefs(s_session())
const roles = computed(() => {
  if (!s_matches().matches || !summoner?.value) return

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
  get: () => s_matches().filter?.role,
  set: val => s_matches().setFilter('role', val),
})
</script>

<template>
  <UTabs
    v-model:model-value="roleModel"
    :items="roles"
    value-key="name"
    default-value="all"
  />
</template>
