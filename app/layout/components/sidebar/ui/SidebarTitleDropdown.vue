<script setup lang="ts">
const { title, class: className } = defineProps<{
  class?: HTMLAttributes["class"];
  title?: string;
}>();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger
      variant="ghost"
      class="flex h-11 w-full items-center justify-between bg-transparent px-2 disabled:border-transparent! disabled:bg-transparent disabled:opacity-100 disabled:**:text-bc disabled:hover:bg-transparent disabled:hover:shadow-none disabled:hover:drop-shadow-none data-[state=open]:border-b3 data-[state=open]:bg-b3/50! data-[state=open]:shadow-xs data-[state=open]:inset-shadow-xxs"
      as-child
    >
      <slot>
        <h2 class="pt-1 font-bold dst">
          {{ title }}
        </h2>
      </slot>

      <icon name="select" />
    </DropdownMenuTrigger>
    <DropdownMenuPopContent>
      <slot name="content" />
    </DropdownMenuPopContent>
  </DropdownMenu>
</template>
