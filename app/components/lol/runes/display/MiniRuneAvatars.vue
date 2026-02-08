<script setup lang="ts">
const { class: className, set } = defineProps<{
  class?: HTMLAttributes['class']
  set: RuneSet
}>()
</script>

<template>
  <div
    :class="
      cn(
        'avatar-group translate-x-px items-center justify-end -space-x-2.5',
        className,
      )
    ">
    <div class="avatar size-8 border-3! group-open/trig:border-p2">
      <Keystone
        :id="set.keystone"
        class="-mt-px -ml-px size-7" />
    </div>
    <div
      class="border-b4/60 avatar relative grid size-7 place-items-center! border! bg-p0 group-open/trig:border-p2">
      <img
        class="absolute size-4.5 shrink-0"
        :alt="set.secondary.path"
        :src="`/img/paths/${set.secondary.path}.webp`">
    </div>
  </div>
</template>
