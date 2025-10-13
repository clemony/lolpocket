<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

interface Props extends PrimitiveProps {
  keystone: number | undefined
  active?: ButtonVariants['active']
  base?: ButtonVariants['base']
  class?: HTMLAttributes['class']
  hover?: ButtonVariants['hover']
  primary: string | undefined
  secondary: string | undefined
  shape?: ButtonVariants['shape']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'ghost',
})

const keystone = computed (() => props.keystone)
const primary = computed (() => props.primary)
const secondary = computed (() => props.secondary)
console.log('🌱 - secondary:', secondary)
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn('grid place-items-center size-20 padding-0 group/select dss drop-shadow-black/4 !overflow-visible shrink-0', buttonVariants({ base, variant, size, shape, hover, active }), props.class)">
    <div class="inset-0 absolute grid place-items-center overflow-visible ">
      <img
        v-if="keystone"
        v-memo="[keystone]"
        :alt="keystone.toString()"
        :src="`/img/runes/${primary}/${keystone}.webp`"
        class="!w-full shrink-0 place-self-center absolute drop-shadow-md !h-auto" />

      <i-lol-runes
        v-else
        class="!size-9 text-bc/30 absolute opacity-60 shrink-0" />

      <span
        v-memo="[props.secondary]"
        :class="
          cn(
            'size-8  rounded-full bg-b1 overflow-hidden   group-hover/select:!bg-tint-b2/40 transition-all duration-250 *:transition-opacity *:duration-200 after:absolute after:inset-0 after:opacity-0 after:bg-black/70 after:z-1 border grid place-items-center border-b3/90 absolute -bottom-0 -right-2', { 'after:bg-transparent': !secondary },
          )
        ">
        <img
          v-if="secondary"
          :title="secondary"
          :alt="secondary"
          :src="`/img/paths/${secondary}.webp`"
          class="w-5 !h-auto" />

        <i-lol-runes
          v-else
          class="!size-5.5 text-bc/30 group-hover/fab:opacity-0 shrink-0" />

        <icon
          name="select"
          :class="cn('size-4 group-hover/fab:opacity-60 opacity-0 absolute z-2', { 'text-white': secondary })" />
      </span>
    </div>
  </Primitive>
</template>