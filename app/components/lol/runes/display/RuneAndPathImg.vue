<script setup lang="ts">
import { Primitive } from 'reka-ui'

const { class: className, pathClass } = defineProps<{
  class?: HTMLAttributes['class']
  set: RuneSet
  pathClass?: HTMLAttributes['class']
}>()
</script>

<template>
  <Primitive
    :class="
      cn(
        'padding-0 group/btn dss grid size-20 shrink-0 place-items-center overflow-visible! drop-shadow-black/4',
        className,
      )
    "
  >
    <div class="absolute inset-0 grid place-items-center overflow-visible">
      <img
        v-if="set.keystone"
        v-memo="[set.keystone]"
        class="absolute h-auto! w-full! shrink-0 place-self-center opacity-97 drop-shadow-md drop-shadow-black/30"
        :alt="set.keystone.toString()"
        :src="`/img/runes/${set.primary.path}/${set.keystone}.webp`"
      >

      <Icon
        v-else
        class="text-bc/30 absolute size-9! shrink-0 opacity-60"
        name="lp:runes"
      />

      <Element
        v-memo="[set.secondary.path]"
        variant="base"
        :class="
          cn(
            'border-b3/90 group-hover/btn:bg-tint-b2/40! absolute -right-1.5 bottom-0 grid size-7 place-items-center overflow-hidden rounded-full border shadow-xs transition-all duration-250 *:transition-opacity *:duration-200 after:absolute after:inset-0 after:z-1 after:bg-black/70 after:opacity-0',
            { 'after:bg-transparent': !set.secondary.path },
            pathClass,
          )
        "
      >
        <img
          v-if="set.secondary.path"
          class="absolute h-max! w-4.5! shrink-0"
          :title="set.secondary.path"
          :alt="set.secondary.path"
          :src="`/img/paths/${set.secondary.path}.webp`"
        >

        <Icon
          v-else
          class="text-bc/30 size-5.5! shrink-0 group-hover/btn:opacity-0"
          name="lp:runes"
        />

        <icon
          name="up-down"
          :class="
            cn('absolute z-2 size-4 opacity-0 group-hover/btn:opacity-60', {
              'text-white': set.secondary,
            })
          "
        />
      </Element>
    </div>
  </Primitive>
</template>
