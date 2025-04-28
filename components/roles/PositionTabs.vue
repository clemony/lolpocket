<script lang="ts" setup>
const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()

const ms = useMatchStore()
const ss = useSummonerStore()
const md = computed(() => ss.getSummoner(summoner.puuid).matches)
const { filteredSimplifiedNoRole } = useFilteredMatches(md, summoner.puuid)

// Use the composable with the filtered matches
const roleStats = useMatchRoles(filteredSimplifiedNoRole)
</script>

<template>
  <Tabs v-model:model-value="ms.roleSelect">
    <FilterLabel v-model="ms.roleSelect" :active="ms.roleSelect != 'ALL'" @click="ms.roleSelect = 'ALL'">
      {{ ms.roleSelect != 'ALL' ? roleStats.find(r => r.role == ms.roleSelect).displayName : 'Position' }}
    </FilterLabel>

    <IndicatorTabsList class=" w-full grid grid-cols-6 h-14">
      <IndicatorTabsTrigger v-for="role in roleStats" :key="role.role" v-tippy="{ content: `${role.displayName} - ${role.games} game${role.games > 1 ? 's' : ''}` }" :disabled="!role.games" :value="role.role" class="">
        <span class="size-5.5 relative grid place-items-center">
          <component
            :is="`i-roles-${role.role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
            class="h-5 w-auto dst shrink-0 peer-checked:text-nc" :class="{ '!text-bc/80': role.displayName == 'ALL' }" />

        </span>
      </IndicatorTabsTrigger>
      <TabIndicator />
    </IndicatorTabsList>
  </Tabs>
</template>