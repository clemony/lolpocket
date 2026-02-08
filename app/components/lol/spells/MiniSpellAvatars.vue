<script setup lang="ts">
const { class: className, set } = defineProps<{
  class?: HTMLAttributes['class']
  set: SpellSet
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
    <div class="avatar size-7.5 border-3! group-open/trig:border-p2">
      <IndexIcon
        class="-mt-px -ml-px size-6.5"
        :item="spells[set.d]" />
    </div>
    <div class="avatar size-7.5 border-3! group-open/trig:border-p2">
      <IndexIcon
        class="-mt-px -ml-px aspect-square size-6.5 shrink-0"
        :item="spells[set.f]" />
    </div>
  </div>
</template>
