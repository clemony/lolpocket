<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = ref(props.pocket)
</script>

<template>
  <div class="flex *:cursor-pointer flex-col gap-2 *:py-3 *:justify-start *:text-left *:w-full *:text-3 **:pointer-events-auto">
    <button
      class="group btn btn-ghost btn-lg"

      @click="duplicatePocket(pocket)"
    >
      <span>Duplicate</span>
    </button>

    <button class="group btn btn-ghost btn-lg">
      <span>Export to League Client</span>
    </button>

    <button class="group btn btn-ghost btn-lg">
      <span>Share Pocket Card</span>
    </button>

    <button
      class="group btn btn-ghost btn-lg cursor-pointer "
      @click="deletePocket(pocket)"
    >
      Send Pocket to Trash
    </button>
  </div>
</template>

<style scoped>

</style>