<script lang="ts" setup>

const props = defineProps<{
  class?: HTMLAttributes['class']
  matchData: any
}>()
const ms = useMatchStore()


// This already returns a Ref of filtered match data
const {  filteredSimplifiedNoRole } = useFilteredMatches(props.matchData)

// Use the composable with the filtered matches
const roleStats = useMatchRoles(filteredSimplifiedNoRole)
</script>

<template>
  <Tabs v-model:model-value="ms.roleSelect">


    <IndicatorTabsList class=" w-full grid grid-cols-6 h-14">
      <IndicatorTabsTrigger :disabled="!role.games" v-for="role in roleStats" :key="role.role" v-tippy="{content: `${role.displayName} - ${role.games} game${role.games > 1 ? 's' : ''}`, }" :value="role.role" class="">
        <span class="size-5.5 relative grid place-items-center">
          <component
            :is="`i-roles-${role.role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
            class="h-5 w-auto dst shrink-0 peer-checked:text-nc" :class="{'!text-bc/80': role.displayName == 'ALL'}" />

        </span>
      </IndicatorTabsTrigger>
      <TabIndicator />
    </IndicatorTabsList>
  </Tabs>
</template>