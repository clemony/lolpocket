<script setup lang="ts"></script>

<template>
  <!-- new pocket -->
  <Button
    v-tippy="{
      content: 'Create & go to new pocket.',
      theme: 'neutral',
      placement: 'bottom-start',
      delay: 300,
    }"
    variant="ghost"
    hover="outline"
    class="relative h-8 w-10 gap-0! rounded-md pl-1 font-normal"
  >
    <icon name="add" class="size-3 **:stroke-[1.9]" />
    <icon name="folder" class="size-3.75 **:stroke-[1.8]" />
  </Button>
</template>
