<script setup lang="ts">
const {
  id,
  class: className,
} = defineProps<{
  id: number | null
  class?: HTMLAttributes['class']
}
>()
</script>

<template>
  <div
    v-if="id"
    :class="
      cn(
        'rounded-lg relative bg-b2 overflow-hidden grid place-items-center aspect-square shadow-warm-soft shadow-sm shadow-black/30  drop-shadow-sm ',

        className,
      )
    ">
    <Img
      :img="`/img/items/${id}.webp`"
      :alt="id.toString()"
      class="aspect-square opacity-96 size-full absolute rounded-lg" />

    <slot />
  </div>
</template>
