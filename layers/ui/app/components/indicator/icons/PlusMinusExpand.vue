<script lang="ts" setup>
const { open } = defineProps<{
  open?: boolean
}>()
</script>

<template>
  <div class="text-bc/60 relative grid place-items-center px-3.5 font-medium">
    <icon
      name="add"
      class="
        absolute m-auto size-5 scale-x-0 opacity-0 transition-all duration-400
        group-data-[state=open]:scale-y-0 group-data-[state=open]:opacity-0
      "
      :class="{ 'scale-x-100 opacity-60': !open }" />

    <icon
      name="add"
      :class="{ 'scale-y-100 opacity-90': open }"
      class="
        absolute m-auto size-5 opacity-0 transition-all duration-400
        group-data-[state=open]:opacity-100
      " />
  </div>
</template>

<style scoped></style>
