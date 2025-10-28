<script lang="ts" setup>
const { class: className, summoner } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()

const state = useSummonerInject()
const roleStats = await useMatchRoles(state.summoner.value.puuid, state.matches)

<<<<<<< HEAD
/* // @fixme what */
=======
/* //FIXME what */
>>>>>>> refs/remotes/origin/main
</script>

<template>
  <div>
    <!--     <ListboxGroupLabel>
      <FilterLabel v-model="ms().filter.ally" :active="ms().filter.ally !== null" @click="ms().filter.ally = null">
        {{ ms().filter.ally !== null ? ms().filter.ally : 'Teammates' }}
      </FilterLabel>
    </ListboxGroupLabel> -->

    <!--     <FilterLabel
      v-model="ms().filter.role"
      :active="ms().filter.role !== 'ALL'"
      @click="ms().filter.role = 'ALL'">
      {{ ms().filter.role !== 'ALL' ? roleStats.find(r => r.role===ms.filter.role).name : 'Position' }}
    </FilterLabel> -->
  </div>
</template>
