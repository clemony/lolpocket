<script setup lang="ts">
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
  <div :class="cn('rounded-full size-12 aspect-square  grid place-items-center relative', className)">
    <Spell
      v-for="spell, i in set"
      :key="i"
      :name="spell"
      :class="cn('size-full pointer-events-none absolute rounded-full', { '-mask-linear-55 mask-linear-from-40% mask-linear-to-58%': i === 'f' })" />
  </div>
</template>