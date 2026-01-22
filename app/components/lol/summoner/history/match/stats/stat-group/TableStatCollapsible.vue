<script lang="ts" setup>
const { group, k, match, v } = defineProps<{
  match: MatchData
  group: MatchStatGroup
  k: string
  v: MatchStat
}>()

const open = shallowRef<boolean>(false)
</script>

<template>
  <Collapsible
    v-model:open="open"
    class="col-span-full h-fit w-full">
    <!-- trigger -->
    <CollapsibleTrigger as-child>
      <MatchPlayerStatRow
        :key="k"
        :class="cn('', { 'border-0!': open })"
        :match
        :color="group.color"
        :stat="[k, v]">
        <Icon
          name="down"
          wrapper-class="inline"
          :class="cn('transition-rotate mr-1.5 -ml-0.5 inline size-4 opacity-60 duration-200 **:stroke-[3.6]', open ? 'rotate-0' : 'rotate-180')" />
      </MatchPlayerStatRow>
    </CollapsibleTrigger>

    <!-- content -->
    <CollapsibleContent
      class="col-span-full grid w-full auto-rows-max overflow-hidden">
      <MatchPlayerStatRow
        v-for="[k2, v2] in Object.entries(matchStatRegistry).filter(s => s[1].group === 'kills')"
        :key="k2"
        :match
        :color="group.color"
        :stat="[k2, v2]" />
    </CollapsibleContent>
  </Collapsible>
</template>