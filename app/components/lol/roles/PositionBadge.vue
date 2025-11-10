<script lang="ts" setup>
import type { ChampionPosition } from '~~/shared/references'
import { championPositions } from '~~/shared/references'

const { class: className, position: pos } = defineProps<{
  class?: HTMLAttributes['class']
  position: ChampionPosition | string | null
  noLabel?: boolean
  size?: ButtonVariants['size']
  active?: boolean
  clear?: boolean
}>()
console.log('🌱 - p:', pos)

const position = computed(() => {
  if (typeof pos !== 'string')
    return pos

  return championPositions.find(p => p.name === String(pos))
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
    <RoleIcon :position="position.name" />
    <slot>
      {{ position.name }}
    </slot>
    <icon
      v-if="clear"
      name="x"
      class="size-4 text-white **:stroke-[2.6] " />
  </Button>
</template>
