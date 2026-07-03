<script lang="ts" setup>
import type { TeamPosition } from "#shared/constants/misc/positions"
import { teamPositions } from "#shared/constants/misc/positions"
import type { ButtonProps } from "@nuxt/ui"

const {
  class: className,
  position: pos,
  size = "xs",
} = defineProps<{
  class?: HTMLAttributes["class"]
  position: TeamPosition | string | null
  noLabel?: boolean
  size?: ButtonProps["size"]
  active?: boolean
  clear?: boolean
}>()
console.log("🌱 - p:", pos)

const position = computed(() => {
  if (typeof pos !== "string") return pos

  return teamPositions[pos]
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
            active ||
            (champFilter().filters.position &&
              champFilter().filters.position === position.label),
          'pr-3': active && clear,
        },
        className
      )
    "
    :style="{
      backgroundColor: `${(champFilter().filters.position && champFilter().filters.position === position.label) || active ? position.color : 'transparent'}`,
    }">
    <Icon class="text-white" :name="`i-lp-${position?.label.toLowerCase()}`" />
    <slot>
      {{ position.label }}
    </slot>
    <icon v-if="clear" class="size-4 text-white **:stroke-[2.6]" name="x" />
  </UButton>
</template>
