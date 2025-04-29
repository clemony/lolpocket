<script lang="ts" setup>
const props = defineProps<{
menuOpen: boolean
}>()
const menuOpen =  computed (() => props.menuOpen)
</script>

<template>

    <Motion
      v-if="menuOpen"
      key="overlay"
      as="div"
      :animate="{ opacity:[0, 0.5, 1], translate:['100% -100%', '50% -50%', '0% 0%'] }"
      :exit="{ opacity:[1, 0.5, 0], translate:['0% 0%', '50% -50%', '100% -100%'] }"
      :transition="{
        type: 'ease-in',
        duration: 0.5,
      }"
      class=" z-0 -top-100 -right-100 bg-round-white  pointer-events-none size-220 absolute" />
</template>