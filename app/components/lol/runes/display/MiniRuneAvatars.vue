<script setup lang="ts">
const { class: className, set } = defineProps<{
  class?: HTMLAttributes['class']
  set: RuneSet
}>()
</script>

<template>
  <div
    :class="cn('avatar-group    -space-x-2.5 justify-end items-center translate-x-px ', className)">
    <div
      class="avatar    group-open/trig:border-b2   !border-3 size-8">
      <Keystone
        :id="set.keystone"
        class="size-7 -mt-px -ml-px " />
    </div>
    <div
      class="avatar bg-b1  grid !place-items-center relative group-open/trig:border-b2   !border-1 border-b4/60 size-7">
      <img
        :alt="set.secondary.path"
        :src="`/img/paths/${set.secondary.path}.webp`"
        class="size-4.5  absolute shrink-0" />
    </div>
  </div>
</template>