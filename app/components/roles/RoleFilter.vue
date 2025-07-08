<script setup lang="ts">
const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()
const ms = useMatchStore()
const matches = computed(() => summoner.matches)
const { filteredSimplifiedNoRole } = useFilteredMatches(matches, summoner.puuid, ms.mf)

// Use the composable with the filtered matches
const roleStats = useMatchRoles(filteredSimplifiedNoRole)
</script>

<template>
  <div class="w-full ">
    <div class="flex items-center mb-2  -ml-1">
      <label :class="{ 'pointer-events-none': ms.mf.role == 'ALL' }" class="btn btn-sm gap-2 font-medium rounded-lg px-2.5 place-self-center text-3  btn-ghost" @click="ms.mf.role = 'ALL'">
        <input
          v-model="ms.mf.role"
          class="peer hidden"
          aria-label="All"
          name="match-champion-filter"
          value="All" />
        {{ ms.mf.role != 'ALL' ? roleStats.find(r => r.role == ms.mf.role).displayName : 'Position' }}

        <icon v-if="ms.mf.role != 'ALL'" name="x-sm" class=" shrink-0 -mt-px" />

      </label>
    </div>

    <div class="w-full h-15 justify-start overflow-hidden px-2">
      <transition-slide :offset="{ enter: [10, 0], leave: [-10, 0] }" group class="flex flex-wrap gap-5 relative w-full">
        <template
          v-for="role in roleStats" :key="role.role">
          <label
            v-if="ms.mf.role == 'ALL' || ms.mf.role == role.role"

            v-tippy="{ content: `${role.displayName} - ${role.games} game${role.games > 1 ? 's' : ''}` }"
            class="size-14 grid place-items-center " :class="cn({ 'bg-n1 border-n1 shadow-n1/20 shadow-sm order-2  ': role.role == ms.mf.role, 'border-b3/80 btn  size-14  mr-0 btn-square': role.games })">

            <input
              v-model="ms.mf.role" class="peer hidden absolute"
              type="radio" :disabled="!role.games"
              :value="role.role"
              name="item-types" />

            <component
              :is="`i-roles-${role.role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
              class="h-5 w-auto dst shrink-0 peer-checked:text-nc" :class="{ '!text-bc/80': role.displayName == 'ALL' }" />

          </label>
        </template>
      </transition-slide>
    </div>
  </div>
</template>

<style scoped></style>
