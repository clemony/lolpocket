<script setup lang="ts">
import { statIndex } from '#shared/appdata'

const {
  class: className,
  stat: st,
  i,
  length,
  value,
} = defineProps<{
  class?: HTMLAttributes['class']
  stat: string
  i: number
  length: number
  value: Record<string, number>
}>()

const stat = computed(() => statIndex.find(s => s.id === st) || null)
</script>

<template>
  <div class="w-full group">
    <div
      v-tippy="{
        content: value.min != value.max ? `${value.min} -> ${value.max}` : null,
        placement: 'top-end',
        offset: [3, -3],
        arrow: false,
      }"
      class="!gap-3 items-center  w-full h-11 flex">
      <component
        :is="stat.icon"
        :class="
          cn('!size-3.5 shrink-0 dst group-hover/stat:opacity-80 opacity-80', {
            'scale-120': ['manaRegen', 'healthRegen'].includes(stat.id),
          })
        " />
      <span class="w-full text-start text-xs truncate">{{ stat.longAbbr || stat.abbr || stat.name }}</span>

      <span class="font-medium text-bc/80">
        {{ value.current }}
      </span>
    </div>

    <Separator
      v-if="isEven(length) ? ![length - 1, length - 2].includes(i) : ''"
      class="bg-b3/60" />
  </div>

  <!--   <div class="w-full group">
    <label
      class="opacity-90  text-xs px-1"
      :name="stat.name ">{{ stat.name }}</label>

    <Button
      v-tippy="{
        content: value.min != value.max ? `${value.min} -> ${value.max}` : null,
        placement: 'top-end',
        offset: [0, 3],
        arrow: false,
      }"
      variant="btn"
      :class="cn('justify-between  border-b4/80 group/stat inset-shadow-xs hover:border-bc/60 !font-medium !px-4 !text-sm', { 'pointer-events-none': value.min == value.max })">
      <component
        :is="stat.icon"
        :class="
          cn('!size-3.75 shrink-0 group-hover/stat:opacity-80 opacity-50 dst', {
            'scale-115': ['manaRegen', 'healthRegen'].includes(stat.id),
          })
        " />

      <span class="font-medium tracking-wide opacity-80">
        {{ value.current }}
      </span>
    </Button>
  </div> -->
</template>