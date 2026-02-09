<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui';

const {
  class: className,
  position: pos,
  size = 'xs',
} = defineProps<{
  class?: HTMLAttributes['class']
  position: MapPosition | string | null
  noLabel?: boolean
  size?: ButtonProps['size']
  active?: boolean
  clear?: boolean
}>()
console.log('🌱 - p:', pos)

const position = computed(() => {
  if (typeof pos !== 'string') return pos

  return mapPositions.find(p => p.name === String(pos))
})
</script>

<template>
 <UButton
    v-if="position"
    variant="outline"
    hover="btn"
    :size
    :class="
      cn(
        'w-fit gap-2.5! rounded-lg text-sm! font-medium! text-pc/90 capitalize',
        {
          'order-first text-white hover:text-pc hover:**:text-pc':
            active
            || (cs().filters.position && cs().filters.position === position.name),
          'pr-3': active && clear,
        },
        className,
      )
    "
    :style="{
      backgroundColor: `${(cs().filters.position && cs().filters.position === position.name) || active ? position.color : 'transparent'}`,
    }">
    <RoleIcon
      class="text-white"
      :position="position.name" />
    <slot>
      {{ position.name }}
    </slot>
    <icon
      v-if="clear"
      class="size-4 text-white **:stroke-[2.6]"
      name="x" />
  </UButton>
</template>
