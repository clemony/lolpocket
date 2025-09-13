<script lang="ts" setup>
const state = useSummonerInject()
const roles = computed (() => state.useRoles().value)
/* const rolesPlayed = computed (() => roles.value.value.filter(r => r.games > 0))
 */
const roleModel = computed({
  get: () => state.filter.role,
  set: val => state.setFilter('role', val),
})
</script>

<template>
  <Tabs
    v-model:model-value="roleModel"
    default-value="ALL"
    class="w-120 max-w-120 p-0 field-box">
    <IndicatorTabsList class="bg-transparent gap-1 grid-cols-[1fr_1fr_1.2fr_1fr_1fr_1.2fr] h-10 w-full">
      <TabIndicator class="z-0" />
      <IndicatorTabsTrigger
        v-for="role in roles"
        :key="role.name"
        :value="role.role"
        class="place-items-center z-1 not-disabled:!opacity-100 hover:bg-b3/40 hover:inset-shadow-sm rounded-field"
        :disabled="!role.games">
        <component
          :is="`i-roles-${role.role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
          class="h-4.5 w-auto dst shrink-0 " />
      </IndicatorTabsTrigger>
    </IndicatorTabsList>

    <slot />
  </Tabs>
</template>oles