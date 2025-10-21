<script setup lang="ts">
const { class: className, set } = defineProps<{
  class?: HTMLAttributes['class']
  set: SpellSet
}>()
</script>

<template>
  <div
    :class="cn('avatar-group    -space-x-3 justify-end items-center translate-x-px ', className)">
    <div
      class="avatar    group-open/trig:border-b2   !border-3 size-7.5">
      <Spell
        :name="set.d"
        class="size-6.5 -mt-px -ml-px " />
    </div>
    <div
      class="avatar    group-open/trig:border-b2   !border-3 size-7.5">
      <Spell
        :name="set.f"
        class="size-6.5 -ml-px -mt-px aspect-square shrink-0" />
    </div>
  </div>
</template>