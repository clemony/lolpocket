<script lang="ts" setup>
const { filter, matches, setFilter, summoner } = useSummonerInject()

const roles = computed(() => {
  if (!matches.value || !summoner?.value)
    return

  return useMatchRoles(summoner?.value?.puuid, matches)
})

watch(() => filter?.value?.role, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
const roleModel = computed({
  get: () => filter?.value?.role,
  set: val => setFilter('role', val),
})

const tabClass = '**:!text-bc'
</script>

<template>
  <Tabs
    v-model:model-value="roleModel"
    default-value="ALL"
    class="w-full p-0">
    <TabsList

      class="h-10 w-full justify-stretch border-b3/80">
      <TabIndicator class="z-0" />
      <TabsTrigger
        v-for="role in roles"
        :key="role.name"
        :value="role.role"
        :class="tabClass"
        :disabled="!role.games">
        <Icon
          :name="`lp:${role.role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
          class="mb-px h-4.5 w-auto shrink-0 dst" />
      </TabsTrigger>
    </TabsList>

    <slot />
  </Tabs>
</template>
