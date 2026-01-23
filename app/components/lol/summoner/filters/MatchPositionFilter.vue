<script lang="ts" setup>
const { class: className, color, orientation = 'horizontal', size = '10' } = defineProps<{
  class?: HTMLAttributes['class']
  color?: TabListVariants['color']
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
      :class="cn(tabListVariants({ color, size }), className)">
      <TabIndicator class="z-0" />

      <TabsTrigger
        value="all"
        class="**:text-bc! grid! place-items-center"
        :disabled="!matches">
        <Icon
          name="role:all"
          class="dst mb-px size-5.5 shrink-0" />
      </TabsTrigger>
      <TabsTrigger
        v-for="role in roles"
        :key="role.name"
        :value="role.role"
        class="**:text-bc! grid! place-items-center"
        :disabled="!role.games">
        <Icon
          :name="`role:${role.role}`"
          class="dst mb-px size-5.5 shrink-0" />
      </TabsTrigger>
    </TabsList>

    <slot />
  </Tabs>
</template>
