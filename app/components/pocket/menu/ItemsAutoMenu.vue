<script setup lang="ts">
import type { Pocket } from '~~/shared/schema'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
const route = useRoute()
const pocket = ref<Pocket>(ps().getPocket(String(route.params.pocket_key)))
</script>

<template>
  <MenubarRadioGroup
    v-model:model-value="pocket.main.items"
    :class="cn('', className)">
    <MenubarLabel class="before:bg-b1/30 sticky top-0 z-1 -mx-1 -translate-y-1 px-3 pt-2 pb-1 backdrop-blur  before:absolute  before:top-0 before:left-0 before:z-1 before:mix-blend-lighten">
      <span class="isolate z-2">
        Core items
      </span>
    </MenubarLabel>

    <MenubarRadioItem
      v-for="set, i in pocket.items"
      :key="i"
      class="z-0 gap-1 px-2.5 [&_#indicator]:order-last"
      :value="set.id">
      <template
        v-for="ix in 6"
        :key="ix">
        <Item
          :id="Number(set.items[ix - 1])"
          class="!size-6" />
      </template>

      <Grow />
    </MenubarRadioItem>
  </MenubarRadioGroup>
</template>