<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const roleStats = await useMatchRoles(
  sSession().summoner?.puuid ?? "",
  sMatches().matches
)
const roleModel = computed({
  get: () => ms().filter.role ?? "ALL",
  set: (value: string) => {
    ms().filter.role = value
  },
})
</script>

<template>
  <Tabs v-model:model-value="roleModel" :items="mapPositions" />
</template>
