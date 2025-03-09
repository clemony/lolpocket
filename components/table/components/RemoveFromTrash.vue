<script lang="ts" setup>
const props = defineProps<{
  params: any
}>()

console.log('💠 - params:', props.params)
</script>

<template>
  <div class="size-full grid place-items-center">
<button v-tippy="'Remove from Trash'" class="btn btn-lg  btn-square group bg-b3/40 hover:bg-b3 -ml-3">
  <icon name="ph:arrow-u-up-left" class="size-6.5 dst stroke-[1.2] opacity-90 group-hover:opacity-100"/>
</button>
</div>
</template>

<style scoped>

</style>