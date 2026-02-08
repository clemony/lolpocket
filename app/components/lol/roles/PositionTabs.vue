<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const roleStats = await useMatchRoles(s_session().summoner.puuid, s_matches().matches)
</script>

<template>
  <Tabs v-model:model-value="ms().filter.role">
    <FilterLabel
      v-model="ms().filter.role"
      :active="ms().filter.role !== 'ALL'"
      @click="ms().filter.role = 'ALL'">
      {{
        ms().filter.role !== "ALL"
          ? roleStats.find((r) => r.role === ms().filter.role).name
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
