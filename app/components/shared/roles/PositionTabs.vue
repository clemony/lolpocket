<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const ms = useMatchStore()
const state = useSummonerInject()
const roleStats = await useMatchRoles(state.summoner.value.puuid, state.matches)
</script>

<template>
  <Tabs v-model:model-value="ms.filter.role">
    <FilterLabel
      v-model="ms.filter.role"
      :active="ms.filter.role != 'ALL'"
      @click="ms.filter.role = 'ALL'">
      {{ ms.filter.role != 'ALL' ? roleStats.find(r => r.role == ms.filter.role).displayName : 'Position' }}
    </FilterLabel>

    <IndicatorTabsList class=" w-full grid grid-cols-6 h-14">
      <IndicatorTabsTrigger
        v-for="role in roleStats"
        :key="role.role"
        v-tippy="{ content: `${role.displayName} - ${role.games} game${role.games > 1 ? 's' : ''}` }"
        :disabled="!role.games"
        :value="role.role"
        class="">
        <span class="size-5.5 relative grid place-items-center">
          <component
            :is="`i-roles-${role.role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
            class="h-5 w-auto dst shrink-0 peer-checked:text-nc"
            :class="{ '!text-bc/80': role.displayName == 'ALL' }" />

        </span>
      </IndicatorTabsTrigger>

      <TabIndicator />
    </IndicatorTabsList>
  </Tabs>
</template>