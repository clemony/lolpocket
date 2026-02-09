<script lang="ts" setup>
const { open } = defineProps<{
  open?: boolean
}>()
</script>

<template>
  <div class="relative grid place-items-center px-3.5 font-medium text-pc/60">
    <icon
      class="absolute m-auto size-5 scale-x-0 opacity-0 transition-all duration-400 group-data-[state=open]:scale-y-0 group-data-[state=open]:opacity-0"
      name="add"
      :class="{ 'scale-x-100 opacity-60': !open }" />

    <icon
      class="absolute m-auto size-5 opacity-0 transition-all duration-400 group-data-[state=open]:opacity-100"
      name="add"
      :class="{ 'scale-y-100 opacity-90': open }" />
  </div>
</template>
