<script setup lang="ts">
  const props = defineProps<{
    pocket: pocket;
  }>();
</script>

<template>
  <ContextMenuItem
    @click="pocket.name = generateRandomString()"
    class="group/what gap-3">
    <icon
      name="ph:question-mark"
      class="group-hover/what:fill-mode-both size-4 transition-all duration-200 ease-in group-hover/what:[transform-origin:bottom_center] group-hover/what:rotate-45" />
    New Mystery Name
  </ContextMenuItem>
  <ContextMenuSeparator />
</template>

<style scoped></style>
