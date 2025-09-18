<script setup lang="ts">
import { StatTip } from '#components'

const {
  i,
  length,
  stat: st,
} = defineProps<{
  stat: StatIndex
  i: number
  groupName?: string
  length: number
}>()
</script>

<template>
  <div class="w-full  group">
    <tippy
      placement="top-start"
      :content="h(StatTip, { stat })"
      :offset="[-6, -3]"
      :arrow="false"
      class="!gap-3 items-center flex-nowrap  whitepsace-nowrap  w-full h-11 flex">
      <component
        :is="stat?.icon"
        :class="
          cn('!size-3.5 shrink-0 dst group-hover/stat:opacity-80 opacity-80', {
            'scale-115': ['manaRegen', 'healthRegen'].includes(stat.id),
            'scale-94 mt-px': ['health', 'armor', 'movespeed'].includes(stat.id),
          })
        " />
      <span :class="cn('w-full flex-nowrap text-nowrap font-medium text-start group-hover:underline underline-offset-2 text-xs whitepsace-nowrap', { 'pl-6.5': !stat.icon })">{{ stat.longAbbr || stat.abbr || stat.name }}</span>

      <span class="font-medium text-nowrap ">
        {{ stat?.values.current || stat.values.flat }}
      </span>
    </tippy>

    <Separator
      v-if="isEven(length) ? ![length - 1, length - 2].includes(i) : length - 1 != i"
      class="bg-b3/30" />
  </div>
</template>