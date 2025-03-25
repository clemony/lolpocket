<script lang="ts" setup>
const props = defineProps<{
  model: boolean
}>()
</script>

<template>
  <button class="btn btn-ghost btn-square *:absolute *:size-4.5 *:tldr-40 ">
    <icon name="radix-icons:pin-right" class="opacity-90  tldr-40" :class="{ '-translate-x-1 opacity-0 scale-x-0 w-0': props.model }" />
    <icon name="radix-icons:pin-right" class=" opacity-0  tldr-40 scale-x-0 translate-x-1 w-0" :class="{ 'w-4.5 opacity-90 translate-x-0 scale-x-100': props.model }" />
  </button>
</template>