<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchData
}>()
const open = shallowRef<boolean>(true)
</script>

<template>
  <Collapsible
    v-model:open="open"
    class="match-data-table z-auto grid h-max w-full auto-rows-auto px-2 pb-0 **:text-xs">
    <!-- sticky header -->

    <CollapsibleTrigger class="contents w-full">
      <div
        class="sticky top-11 left-0 z-2 mb-0.5 -ml-1 grid h-6 w-full grid-cols-[2.14fr_10fr] items-center">
        <div
          class="inline-flex items-center gap-2 rounded-lg px-2 text-sm! leading-5 font-semibold text-nowrap text-shade-p3/20 capitalize saturate-110">
          <Icon
            name="up"
            :class="
              cn(
                'transition-rotate size-4 duration-200 **:stroke-[3.6] **:text-shade-p3/20',
                open ? 'rotate-0' : 'rotate-180',
              )
            " />
          Teams
        </div>
      </div>

      <div
        class="pointer-events-none relative z-0 -mt-3.25 flex w-full gap-2 overflow-hidden">
        <div
          class="invisible h-0.5 w-fit gap-2 py-1 pl-10 text-sm font-semibold text-nowrap capitalize opacity-0">
          Teams
        </div>
        <Separator class="h-0.5 w-full bg-shade-p3/20" />
      </div>
    </CollapsibleTrigger>

    <CollapsibleContent class="group/row z-auto h-fit w-full p-px pb-0">
      <TeamStatRow
        v-for="[k, v] in Object.entries(teamStatRegistry)"
        :key="k"
        :k
        :v
        :teams="match.teams" />
    </CollapsibleContent>
  </Collapsible>
</template>
