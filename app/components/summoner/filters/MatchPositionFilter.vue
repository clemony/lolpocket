<script lang="ts" setup>
const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()

const ms = useMatchStore()
const ss = useSummonerStore()
const { filteredNoRole } = useFilteredMatches(summoner.puuid, ms.mf)

// Use the composable with the filtered matches
const roleStats = useMatchRoles(summoner.puuid, filteredNoRole)

const rolesPlayed = computed (() => roleStats.value.filter(r => r.games > 0))
</script>

<template>
  <Tabs
    v-model:model-value="ms.mf.role"
    class="w-120 max-w-120 ">
    <Field class="p-0 gap-0 w-full">
      <IndicatorTabsList class="bg-transparent grid-cols-[1fr_1fr_1.2fr_1fr_1fr_1.2fr] h-10 w-full">
        <TabIndicator class="z-0" />
        <IndicatorTabsTrigger
          v-for="role in roleStats"
          :key="role.role"
          :value="role.role"
          class="place-items-center z-1"
          :disabled="!role.games">
          <component
            :is="`i-roles-${role.role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
            class="h-4.5 w-auto dst shrink-0 text-bc/60 text-bc/60" />
        </IndicatorTabsTrigger>
      </IndicatorTabsList>
    </Field>

    <slot />
  </Tabs>
</template>