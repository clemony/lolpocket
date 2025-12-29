<script lang="ts" setup>
const { title, class: className, stat, time } = defineProps<{
  stat?: ItemSetStat | TimedStatDetail | StatDetail | undefined
  class?: HTMLAttributes['class']
  title?: string | number | string[]
  time?: boolean
}>()

const isA = computed (() => typeof title !== 'string' && typeof title !== 'number')

const labels = computed (() => time ? statLabelsWithTime : statLabels)
</script>

<template>
  <div :class="cn('max-h-25 w-30 max-w-30 min-w-30 pb-2.5')">
    <h4
      v-if="title"
      :class="cn('h-13.25 grow leading-6 font-bold dst', { 'pt-1': !isA, 'pt-1 text-8!': typeof title === 'number' })">
      <template v-if="!isA">
        {{ title }}
      </template>
      <template v-else>
        <template
          v-for="str, i in title"
          :key="i">
          <br v-if="i !== 0" />{{ str }}
        </template>
      </template>
    </h4>

    <div
      class="stat-label relative flex h-full w-1/2 flex-col self-center pt-[5px] select-none">
      <Separator
        :size="0"
        color="b3"
        class="absolute top-0 w-full" />
      <span
        v-for="l in labels"
        :key="l">{{ l }}</span>
    </div>
  </div>
</template>