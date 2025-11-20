<script setup lang="ts">
const { disabled } = defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <Select>
    <VarSelectTrigger
      variant="ghost"
      hover="inset"
      class="w-28 justify-start pl-3 hover:border-b4/50!"
      size="sm">
      <SelectValue />
      <icon
        name="down"
        class="
          absolute right-2 size-4 opacity-60 group-hover/select:opacity-100
        " />
    </VarSelectTrigger>
    <LazySelectContent
      align="end"
      class="
        w-29.5 -translate-y-[calc(var(--reka-select-trigger-height)+6px)]!
        **:text-3
      ">
      <SelectItem
        class="pr-1!"
        value="best">
        Best
      </SelectItem>
      <SelectItem
        class="pr-0"
        value="new">
        New
      </SelectItem>
    </LazySelectContent>
  </Select>
</template>
