<script setup lang="ts">
import type { SpellSet } from '~~/shared/schema'

const { class: className, set: s } = defineProps<{
  class?: HTMLAttributes['class']
  set: SpellSet
}>()

const set = computed(() => {
  if (!s)
    return null
  const { id, ...rest } = s
  return rest
})
</script>

<template>
  <div
    :class="
      cn(
        `relative grid aspect-square size-12 place-items-center rounded-full`,
        className,
      )
    ">
    <IndexIcon
      v-for="(spell, i) in set"
      :key="i"
      :item="spellbook[i]"
      :name="spell"
      :class="
        cn('pointer-events-none absolute size-full rounded-full', {
          '-mask-linear-55 mask-linear-from-40% mask-linear-to-58%': i === 'f',
        })
      " />
  </div>
</template>
