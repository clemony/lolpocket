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
  <div>
    <!--     <ListboxGroupLabel>
      <FilterLabel v-model="ms.playerSelect" :active="ms.playerSelect != null" @click="ms.playerSelect = null">
        {{ ms.playerSelect != null ? ms.playerSelect : 'Teammates' }}
      </FilterLabel>
    </ListboxGroupLabel> -->


        <FilterLabel v-model="ms.roleSelect" :active="ms.roleSelect != 'ALL'" @click="ms.roleSelect = 'ALL'">
      {{ ms.roleSelect != 'ALL' ? roleStats.find(r => r.role == ms.roleSelect).displayName : 'Position' }}
    </FilterLabel>

  </div>
</template>