<script setup lang="ts">
</script>

<template>
  <!-- new pocket -->
  <Button
    v-tippy="{ content: 'Create & go to new pocket.', theme: 'default', placement: 'bottom-start', delay: 300 }"
    variant="ghost"
    hover="outline"
    class="font-normal rounded-md h-8 pl-1 w-10  relative !gap-0 ">
    <icon
      name="add"
      class=" size-3  **:stroke-[1.9] " />
    <icon
      name="folder"
      class="size-3.75 **:stroke-[1.8] " />
  </Button>
</template>