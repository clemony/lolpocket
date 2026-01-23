<script setup lang="ts">
const { class: className, set } = defineProps<{
  class?: HTMLAttributes['class']
  set: RuneSet
}>()
</script>

<template>
  <div
    :class="
      cn('avatar-group translate-x-px items-center justify-end -space-x-2.5',
         className,
      )
    ">
    <div
      class="avatar group-open/trig:border-b2 size-8 border-3!">
      <Keystone
        :id="set.keystone"
        class="-mt-px -ml-px size-7" />
    </div>
    <div
      class="
        avatar border-b4/60 bg-b1 group-open/trig:border-b2 relative grid size-7
        place-items-center! border!
      ">
      <img
        :alt="set.secondary.path"
        :src="`/img/paths/${set.secondary.path}.webp`"
        class="absolute size-4.5 shrink-0" />
    </div>
  </div>
</template>
