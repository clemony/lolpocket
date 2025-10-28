<script lang="ts" setup>
import type { ChampionPosition } from '#shared/appdata'
import { championPositions } from '#shared/appdata'

const { class: className, position: p } = defineProps<{
  class?: HTMLAttributes['class']
  position: ChampionPosition | string | null
  noLabel?: boolean
  size?: ButtonVariants['size']
  active?: boolean
  clear?: boolean
}>()

const position = computed(() => {
  if (typeof p !== 'string')
    return p

  return championPositions.find(p => p.name === (p ?? 'All'))
})
</script>

<template>
  <Button
    v-if="position"
    variant="outline"
    hover="btn"
    :size
    :class="cn('w-fit !text-2  !font-medium  !gap-2.5 pl-4 pr-6  text-bc/90 capitalize ', { 'hover:**:text-bc hover:text-bc order-first text-white': active || cs().filters.position && cs().filters.position === position.name, 'pr-3': active && clear }, className)"
    :style="{
      backgroundColor: `${cs().filters.position && cs().filters.position === position.name || active ? position.color : 'transparent'}`,
    }">
    <component
      :is="`i-lol-${position?.name.toLowerCase()}`"
      :class="cn('!size-4  dst shrink-0')" />

    {{ position.name }}
    <icon
      v-if="clear"
      name="x"
      class="size-4 text-white **:stroke-[2.6] " />
  </Button>
</template>
