<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const roleStats = await useMatchRoles(
  s_session().summoner?.puuid ?? '',
  s_matches().matches
)
const roleModel = computed({
  get: () => ms().filter.role ?? 'ALL',
  set: (value: string) => {
    ms().filter.role = value
  },
})
</script>

<template>
  <Tabs v-model:model-value="roleModel">
    <FilterLabel
      v-model="roleModel"
      :active="roleModel !== 'ALL'"
      @click="roleModel = 'ALL'">
      {{
        roleModel !== "ALL"
          ? roleStats.find((r) => r.role === roleModel)?.name
          : "Position"
      }}
    </FilterLabel>

    <TabsList class="grid h-14 w-full grid-cols-6">
      <TabsTrigger
        v-for="role in roleStats"
        :key="role.role"
        v-tippy="{
          content: `${role.name} - ${role.games} game${role.games > 1 ? 's' : ''}`,
        }"
        class=""
        :disabled="!role.games"
        :value="role.role">
        <span class="relative grid size-5.5 place-items-center">
          <component
            :is="`i-roles-${role.role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
            class="h-5 w-auto shrink-0 dst peer-checked:text-nc"
            :class="{ 'text-pc/80!': role.name === 'ALL' }" />
        </span>
      </TabsTrigger>

      <TabIndicator />
    </TabsList>
  </Tabs>
</template>
