<script lang="ts" setup>
const props = defineProps<{
  check?: boolean
  group?: string
}>()

watch(
  () => props.check,
  (newVal) => {
    // console.log('💠 - newVal:', newVal)
  },
)
</script>

<template>
  <div class="place-items-center font-medium  text-bc/80 px-3.5 relative group grid">
    <icon
      name="add-sm"
      class="size-5 transition-all scale-x-0 opacity-0 absolute m-auto duration-400 "
      :class="{ 'scale-x-100 opacity-80': props.check == false }"
    />

    <icon
      name="minus-sm"
      :class="{ 'opacity-90  scale-y-100': props.check == true }"
      class="size-5 scale-y-0 transition-all opacity-0 absolute m-auto duration-400"
    />
  </div>
</template>

<style scoped></style>
