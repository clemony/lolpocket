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

const rolesPlayed = computed (() => roleStats.value.filter(r => r.games > 0))
</script>

<template><!--
  <Tabs v-model:model-value="ms.roleSelect" >

    <IndicatorTabsList  class="grid auto-cols-min grid-flow-col">
        <template v-for="role in roleStats" :key="role.role" >

      <IndicatorTabsTrigger   v-tippy="{ content: role.displayName}" v-if="role.games" class="" :value="role.role">
        <span class="size-5.5 relative grid place-items-center">
         

        </span>
      </IndicatorTabsTrigger>
        </template>
      <TabIndicator   />
    </IndicatorTabsList>
  </Tabs> -->

  <Tabs v-model:model-value="ms.roleSelect" class="w-full">
    <Field class="p-0 gap-0 w-full">
      <IndicatorTabsList class="bg-transparent grid-cols-[1fr_1fr_1.2fr_1fr_1fr_1.2fr] h-10 w-full">
        <IndicatorTabsTrigger v-for="role in roleStats" :key="role.role" :value="role.role" class="place-items-center " :disabled="!role.games"> <component
            :is="`i-roles-${role.role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
            class="h-4.5 w-auto dst shrink-0 text-bc/60 text-bc/60"  />
    
        </IndicatorTabsTrigger>

        <TabIndicator />
      </IndicatorTabsList>
    </Field>

    <slot />
  </Tabs>
</template>