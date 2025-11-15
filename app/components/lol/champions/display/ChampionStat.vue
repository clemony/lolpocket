<script setup lang="ts">
import { StatTip } from '#components'

const {
  i,
  length,
  stat: st,
} = defineProps<{
  stat: StatValues
  i: number
  groupName?: string
  length: number
}>()
</script>

<template>
  <div class="group w-full">
    <tippy
      placement="top-start"
      theme="blur"
      :content="h(StatTip, { stat })"
      :offset="[-6, -3]"
      :arrow="false"
      class="
        flex h-11 w-full flex-nowrap items-center justify-between gap-3!
        **:whitespace-nowrap
      ">
      <span
        :class="
          cn(`
            text-start text-2 font-medium text-nowrap lowercase
            underline-offset-2
            group-hover:underline
          `)
        ">
        {{ stat.abbr[1] || stat.abbr || stat.name }}
      </span>

      <div
        class="
          opacity-80
          **:inline-block **:text-3! **:font-semibold **:text-bc **:tabular-nums
        ">
        <NumberTicker
          v-if="stat?.values.current && stat?.id !== 'criticalStrikeDamage'"
          :value="Number(stat?.values.current)">
        </NumberTicker>

        <span
          v-else-if="stat.values.flat"
          class="">
          {{ stat.values.flat }}
        </span>

        <span v-else> 0 </span>
        <span
          v-if="['criticalStrikeDamage', 'attackSpeed'].includes(stat?.id)"
          class="inline font-mono">&thinsp;%</span>
      </div>
    </tippy>

    <Separator
      v-if="
        isEven(length)
          ? ![length - 1, length - 2].includes(i)
          : length - 1 !== i
      "
      class="bg-b3/30" />
  </div>
</template>
