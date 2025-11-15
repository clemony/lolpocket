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
    <div
      class="
        avatar size-7.5 border-3!
        group-open/trig:border-b2
      ">
      <IndexIcon
        :item="spellbook[set.d]"
        class="-mt-px -ml-px size-6.5" />
    </div>
    <div
      class="
        avatar size-7.5 border-3!
        group-open/trig:border-b2
      ">
      <IndexIcon
        :item="spellbook[set.f]"
        class="-mt-px -ml-px aspect-square size-6.5 shrink-0" />
    </div>
  </div>
</template>
