<script lang="ts" setup>
const { class: className, orientation, size = '10', variant } = defineProps<{
  class?: HTMLAttributes['class']
  variant?: TabListVariants['variant']
  size?: TabListVariants['size']
  orientation?: DataOrientation
}>()
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
</script>

<template>
  <Tabs
    v-model:model-value="roleModel"
    default-value="ALL"
    :orientation
    class="w-full p-0">
    <TabsList
      :class="cn('h-10 w-full justify-stretch border-b3/80', buttonVariants({ variant, size }), className)">
      <TabIndicator class="z-0" />
      <TabsTrigger
        v-for="role in roles"
        :key="role.name"
        :value="role.role"
        class="h-full **:text-bc!"
        :disabled="!role.games">
        <Icon
          :name="`role:${role.role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
          class="mb-px h-5.5 w-auto shrink-0 dst" />
      </TabsTrigger>
    </TabsList>

    <slot />
  </Tabs>
</template>
