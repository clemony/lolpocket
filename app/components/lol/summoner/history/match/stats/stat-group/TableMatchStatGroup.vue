<script lang="ts" setup>
const { group, match } = defineProps<{
  match: MatchData
  group: MatchStatGroup
}>()
const open = shallowRef<boolean>(true)
</script>

<template>
  <Collapsible
    v-model:open="open"
    class="match-data-table z-auto grid h-max w-full auto-rows-auto px-2 pb-0.5 **:text-xs">
    <!-- sticky header -->

    <CollapsibleTrigger class="contents w-full">
      <div class="sticky top-11 left-0 z-2 mb-0.5 -ml-1 grid h-6 w-full grid-cols-[2.14fr_10fr] items-center">
        <div
          class="inline-flex items-center gap-2 rounded-lg px-2 text-sm! leading-5 font-semibold text-nowrap text-bc/80 capitalize saturate-110"
          :style="{
            color: `color-mix(in lch, ${group.color} 80%, black 20%)`,
          }">
          <Icon
            :style="{
              color: `color-mix(in lch, ${group.color} 90%, black 10%)`,
            }"
            name="up"
            :class="cn('transition-rotate size-4 duration-200 **:stroke-[3.6]', open ? 'rotate-0' : 'rotate-180')" />
          {{ group.name }}
        </div>
      </div>

      <div class="pointer-events-none relative z-0 -mt-3.25 flex w-full gap-2 overflow-hidden">
        <div class="invisible h-0.5 w-fit gap-2 py-1 pl-10 text-sm font-semibold text-nowrap capitalize opacity-0">
          {{ group.name }}
        </div>
        <Separator
          :style="{
            backgroundColor: `color-mix(in lch, ${group.color} 30%, transparent 70%)`,
          }"
          class="h-0.5 w-full" />
      </div>
    </CollapsibleTrigger>

    <CollapsibleContent
      v-for="[k, v] in Object.entries(matchStatRegistry).filter(s => s[1].group === group.name)"
      :key="k"
      class="group/row z-auto h-fit w-full p-px">
      <!-- collapsible stats -->
      <TableStatCollapsible
        v-if="k && k === 'kills'"
        :match
        :group
        :k
        :v />
      <!-- regular stats -->
      <MatchPlayerStatRow
        v-else
        :key="k"
        :match
        :color="group.color"
        :stat="[k, v]" />
    </CollapsibleContent>
  </Collapsible>
</template>