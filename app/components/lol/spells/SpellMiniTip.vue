<script setup lang="ts">
const { id } = defineProps<{
  id: number
}>()
</script>

<template>
  <button class="flex cursor-pointer gap-3 px-3 pt-2.5 pb-1">
    <!-- IMG -->

    <Img
      v-if="id"
      :src="`/img/spells/${id}.webp`"
      spinner
      :alt="`${spellbook[id].name} Image`"
      class="size-6" />

    <div
      class="flex w-full items-center justify-between gap-4">
      <!-- NAME / LINK -->
      <h5
        class="leading-3 font-medium">
        {{ spellbook[id].name }}
      </h5>

      <Icon
        name="open"
        class="size-3.5" />
    </div>
  </button>
</template>
