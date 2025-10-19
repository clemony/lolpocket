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
      theme="blur"
      :content="h(StatTip, { stat })"
      :offset="[-6, -3]"
      :arrow="false"
      class="!gap-3 items-center flex-nowrap justify-between  **:whitespace-nowrap  w-full h-11 flex">
      <!--       <component
        :is="stat?.icon"
        :class="
          cn('!size-3.5 shrink-0 dst group-hover/stat:opacity-80 opacity-80', {
            'scale-115': ['manaRegen', 'healthRegen'].includes(stat.id),
            'scale-94 mt-px': ['health', 'armor', 'movespeed'].includes(stat.id),
          })
        " /> -->
      <span :class="cn('text-nowrap font-medium text-start group-hover:underline underline-offset-2 text-2  lowercase')">
        {{ stat.longAbbr || stat.abbr || stat.name }}
      </span>

      <div class="**:inline-block **:tabular-nums **:!text-3   opacity-80  **:text-bc **:font-semibold">
        <NumberTicker
          v-if="stat?.values.current && stat?.id !== 'criticalStrikeDamage'"
          :value="Number(stat?.values.current)">
        </NumberTicker>

        <span
          v-else-if=" stat.values.flat"
          class="">
          {{ stat.values.flat }}
        </span>

        <span v-else>
          0
        </span>
        <span
          v-if="['criticalStrikeDamage', 'attackSpeed'].includes(stat?.id)"
          class="font-mono inline">&thinsp;%</span>
      </div>
    </tippy>

    <Separator
      v-if="isEven(length) ? ![length - 1, length - 2].includes(i) : length - 1 !== i"
      class="bg-b3/30" />
  </div>
</template>