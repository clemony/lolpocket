<script setup lang="ts">
const {
  id,
  title,
  alt,
  class: className,
  params,
} = defineProps<{
  id?: number
  params?: any
  alt?: string
  class?: HTMLAttributes['class']
  title?: string
}>()

const champId = computed (() => params ? params.value : id)
</script>

<template>
  <StaticImg
    :img="`/img/champions/${champId}.webp`"
    :alt="title || alt || `Champion ${champId} icon`"
    :class="
      cn(
        'object-center overflow-hidden shadow-sm size-full rounded-lg  bg-b2/40 drop-shadow-sm grid place-items-center ',
        className,
      )
    ">
    <slot />
  </StaticImg>
</template>
