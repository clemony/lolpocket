<script lang="ts" setup>

const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()

const ms = useMatchStore()
const ss = useSummonerStore()

const md = computed(() => ss.getSummoner(summoner.puuid).matches)
const { filteredSimplifiedNoRole } = useFilteredMatches(md, summoner.puuid, ms.mf)

// Use the composable with the filtered matches
const roleStats = useMatchRoles(filteredSimplifiedNoRole)
</script>

<template>
  <div>
    <!--     <ListboxGroupLabel>
      <FilterLabel v-model="ms.mf.ally" :active="ms.mf.ally != null" @click="ms.mf.ally = null">
        {{ ms.mf.ally != null ? ms.mf.ally : 'Teammates' }}
      </FilterLabel>
    </ListboxGroupLabel> -->


        <FilterLabel v-model="ms.mf.role" :active="ms.mf.role != 'ALL'" @click="ms.mf.role = 'ALL'">
      {{ ms.mf.role != 'ALL' ? roleStats.find(r => r.role == ms.mf.role).displayName : 'Position' }}
    </FilterLabel>

  </div>
</template>