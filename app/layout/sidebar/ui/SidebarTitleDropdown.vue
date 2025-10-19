<script setup lang="ts">
const { title, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  title?: string
}>()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger
      variant="ghost"
      class="flex w-full items-center justify-between bg-transparent disabled:bg-transparent disabled:!border-transparent disabled:**:text-bc disabled:hover:drop-shadow-none disabled:opacity-100 disabled:hover:shadow-none disabled:hover:bg-transparent px-2 h-11 data-[state=open]:inset-shadow-xxs data-[state=open]:shadow-xs data-[state=open]:!bg-b3/50 data-[state=open]:border-b3"
      as-child>
      <slot>
        <h2 class="dst font-bold pt-1">
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
