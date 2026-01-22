<script setup lang="ts">
import type { ItemSet } from '@types'

const { class: className, set } = defineProps<{
  class?: HTMLAttributes['class']
  set: ItemSet
}>()
</script>

<template>
  <div
    :class="
      cn(
        'avatar-group translate-x-px items-center justify-end -space-x-3',
        className,
      )
    ">
    <div
      v-for="item in set.items.slice(0, 3)"
      :key="item"
      class="avatar group-open/trig:border-b2 size-7.5 border-3!">
      <div class="size-6">
        <Item :id="item" />
      </div>
    </div>
  </div>
  <Element
    v-if="set.items.length > 3"
    class="-ml-2"
    size="c-6">
    <icon
      name="more"
      class="
        absolute size-3.5 translate-y-2.75 place-self-center **:stroke-[2.5]
      " />
  </Element>
</template>
