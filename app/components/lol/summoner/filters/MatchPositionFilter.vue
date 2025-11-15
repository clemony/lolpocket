<script lang="ts" setup>
const state = useSummonerInject()
const roles = await computed(() => state.roles()).value

const roleModel = computed({
  get: () => state.filter.value.role,
  set: val => state.setFilter('role', val),
})
</script>

<template>
  <Tabs
    v-model:model-value="roleModel"
    default-value="ALL"
    class="w-120 max-w-120 p-0">
    <TabsList
      base="indicator"
      class="h-10 w-full justify-stretch border-b3/80">
      <TabIndicator class="z-0" />
      <TabsTrigger
        v-for="role in roles"
        :key="role.name"
        :value="role.role"
        class="
          z-1 place-items-center rounded-field
          not-disabled:opacity-100!
          hover:bg-b3/40 hover:inset-shadow-sm
        "
        :disabled="!role.games">
        <Icon
          :name="`lp:${role.role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
          class="mb-px h-4.5 w-auto shrink-0 dst" />
      </TabsTrigger>
    </TabsList>

    <slot />
  </Tabs>
</template>
oles
