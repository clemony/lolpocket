<script setup lang="ts">
import { Primitive } from 'reka-ui'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
  set: RuneSet
}>()
</script>

<template>
  <Primitive
    :class="cn('grid place-items-center size-20 padding-0 group/btn dss drop-shadow-black/4 !overflow-visible shrink-0', className)">
    <div class="inset-0 absolute grid place-items-center overflow-visible ">
      <img
        v-if="set.keystone"
        v-memo="[set.keystone]"
        :alt="set.keystone.toString()"
        :src="`/img/runes/${set.primary.path}/${set.keystone}.webp`"
        class="!w-full shrink-0 place-self-center absolute drop-shadow-md drop-shadow-black/30 opacity-97 !h-auto" />

      <i-lol-runes
        v-else
        class="!size-9 text-bc/30 absolute opacity-60 shrink-0" />

      <Element
        v-memo="[set.secondary.path]"
        variant="base"
        :class="
          cn(
            'size-7  rounded-full  overflow-hidden   group-hover/btn:!bg-tint-b2/40 transition-all duration-250 *:transition-opacity *:duration-200 after:absolute after:inset-0 after:opacity-0 after:bg-black/70 after:z-1 border grid place-items-center shadow-xs border-b3/90 absolute -bottom-0 -right-1.5', { 'after:bg-transparent': !set.secondary.path },
          )
        ">
        <img
          v-if="set.secondary.path"
          :title="set.secondary.path"
          :alt="set.secondary.path"
          :src="`/img/paths/${set.secondary.path}.webp`"
          class="w-4.5 !h-auto" />

        <i-lol-runes
          v-else
          class="!size-5.5 text-bc/30 group-hover/btn:opacity-0 shrink-0" />

        <icon
          name="select"
          :class="cn('size-4 group-hover/btn:opacity-60 opacity-0 absolute z-2', { 'text-white': set.secondary })" />
      </Element>
    </div>
  </Primitive>
</template>