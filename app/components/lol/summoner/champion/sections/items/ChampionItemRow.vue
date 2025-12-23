<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'

const { title, as = 'div', class: className, data } = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
  title: string | number
  as?: string
  data: OrderedStatEntry[] | undefined
}>()
</script>

<template>
  <div :class="cn('flex w-full flex-nowrap items-center gap-2 overflow-hidden pb-3', className)">
    <div :class="cn('max-h-25 w-30 max-w-30 min-w-30 pb-2.5')">
      <div :class="cn('h-13 text-5 leading-6 font-bold', { 'pt-1 text-8!': typeof title === 'number' })">
        {{ title }}
      </div>

      <div class="stat-label flex h-full w-1/2 flex-col self-center border-t border-t-b3 pt-[5px]">
        <span
          v-for="l in statLabelsWithTime"
          :key="l">{{ l }}</span>
      </div>
    </div>

    <div
      class="flex! size-full items-center gap-3 overflow-x-scroll border-b border-b-b3/80 px-3 pt-3 pb-2.5">
      <template v-if="data && data?.length">
        <div
          v-for="[k, v] in data"
          :key="k"
          data-tip="item"
          data-size="lg"
          data-interactive="true"
          :data-id="k"
          class="grid grid-rows-[1fr_0.6fr] items-center gap-1.5">
          <div class="relative grid size-16 place-items-center">
            <Item
              :id="k"
              class="size-15" />
            <span class="absolute -top-0.75 -right-0.75 grid size-5.75 place-items-center rounded-full bg-b1">
              <Icon
                name="tabler:circle-filled"
                :class="cn('size-4 dss', { 'text-challenger brightness-95': v?.winrate >= 51, 'text-domination ': v?.winrate <= 49, 'text-bc/20': v?.winrate < 51 && v?.winrate > 49 })" />
            </span>
          </div>
          <div class="grid grid-rows-3 items-center leading-none *:flex *:justify-center *:text-center">
            <div
              size="xs"
              class="flex items-center text-2 font-bold">
              {{ v?.winrate }}
            </div>
            <span
              v-if="v?.games"
              class="gap-1 text-0 font-medium text-bc/90">
              {{ v?.games }}
            </span>
            <span
              v-if="v?.avgTimestamp"
              class="text-0 font-medium text-bc/90">
              {{ useDateFormat(v?.avgTimestamp, 'm:ss') }}
            </span>
          </div>
        </div>
      </template>

      <div
        v-else
        class="grid size-full place-items-center">
        <Element
          base="btn"
          size="7"
          class="text-1 font-medium text-bc/70 fx-0"
          variant="base">
          No item data
        </Element>
      </div>
    </div>
  </div>
</template>