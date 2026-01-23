<script lang="ts" setup>
const { class: className, path, selections } = defineProps<{
  selections?: number[]
  path: RunePath
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Card
    :data-path="path.name"
    :class="cn('gradient rounded-xxl! after:from-b1/60 after:to-b1 relative flex flex-col gap-2 overflow-hidden px-4 pt-4 pb-6 **:cursor-default after:absolute after:inset-0 after:z-0 after:size-full after:bg-linear-to-b', className)">
    <div
      class="flex h-fit w-full max-w-full shrink flex-nowrap items-center justify-between">
      <Keystone
        v-for="keystone in path.slots[0].runes"
        :id="keystone.id"
        :key="keystone.id"
        :data-id="keystone.id"
        data-type="rune"
        :class="cn('tippy z-1 max-w-16 min-w-12 opacity-70 grayscale **:shrink', { 'grayscale-0 opacity-100': selections?.includes(keystone.id) }, path.slots[0].runes.length === 4 ? 'basis-1/4' : 'basis-1/3')" />
    </div>
    <div
      :data-path="path.name"
      class="grid size-full place-items-center gap-5 self-end">
      <div
        v-for="slot, i in path.slots.filter(s => s.tier !== 0)"
        :key="i"
        class="z-1 grid w-full grid-cols-3 place-items-center gap-4">
        <Rune
          v-for="rune in slot.runes"
          :id="rune.id"
          :key="rune.id"
          :data-id="rune.id"
          data-type="rune"
          :class="cn('tippy max-h-12 min-h-10.5 max-w-12 min-w-10.5 opacity-70 grayscale **:shrink', { 'opacity-100 grayscale-0': selections?.includes(rune.id) })" />
      </div>
    </div>
  </Card>
</template>