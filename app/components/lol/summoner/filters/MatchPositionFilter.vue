<script lang="ts" setup>
const { class: className, orientation = 'horizontal', size = '10', variant } = defineProps<{
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

const roleModel = computed({
  get: () => filter?.value?.role,
  set: val => setFilter('role', val),
})
</script>

<template>
  <Tabs
    v-model:model-value="roleModel"
    default-value="all"
    as-child
    :class="cn('w-full', { '': orientation === 'vertical' })"
    :orientation>
    <TabsList
      :class="cn(tabListVariants({ variant, size }), className)">
      <TabIndicator class="z-0" />

      <TabsTrigger
        value="all"
        class="size-full **:text-bc!"
        :disabled="!matches">
        <Icon
          name="role:all"
          class="mb-px h-5.5 w-auto shrink-0 dst" />
      </TabsTrigger>
      <TabsTrigger
        v-for="role in roles"
        :key="role.name"
        :value="role.role"
        class="size-full **:text-bc!"
        :disabled="!role.games">
        <Icon
          :name="`role:${role.role}`"
          class="mb-px h-5.5 w-auto shrink-0 dst" />
      </TabsTrigger>
    </TabsList>

    <slot />
  </Tabs>
</template>
