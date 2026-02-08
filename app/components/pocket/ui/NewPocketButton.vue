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
    class="relative h-8 w-10 gap-0! rounded-md pl-1 font-normal"
    variant="ghost"
    hover="outline">
    <icon
      class="size-3 **:stroke-[1.9]"
      name="add" />
    <icon
      class="size-3.75 **:stroke-[1.8]"
      name="folder" />
  </Button>
</template>
