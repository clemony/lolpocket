<script lang="ts" setup>
const { open } = defineProps<{
  open?: boolean
}>()
</script>

<template>
  <div class="anchor size-4 **:stroke-[2.25]">
    <Icon
      class="size-4 scale-y-100 opacity-0 transition-transform duration-100 group-data-[state=closed]:opacity-100 group-data-[state=open]:scale-y-0"
      name="add"
      :class="{ 'scale-y-100 opacity-60': !open }" />

    <Icon
      class="size-4 opacity-0 transition-opacity delay-20 duration-0 group-data-[state=open]:opacity-100"
      name="minus"
      :class="{ 'scale-y-100 opacity-90': open }" />
  </div>
</template>
