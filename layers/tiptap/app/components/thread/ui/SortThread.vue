<script setup lang="ts">
const { disabled } = defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <Select>
    <VarSelectTrigger
      class="hover:border-b4/50! w-28 justify-start pl-3"
      variant="ghost"
      hover="inset"
      size="sm"
    >
      <SelectValue />
      <icon
        class="absolute right-2 size-4 opacity-60 group-hover/select:opacity-100"
        name="down"
      />
    </VarSelectTrigger>
    <LazySelectContent
      class="**:text-md w-29.5 -translate-y-[calc(var(--reka-select-trigger-height)+6px)]!"
      align="end"
    >
      <SelectItem class="pr-1!" value="best">
        Best
      </SelectItem>
      <SelectItem class="pr-0" value="new">
        New
      </SelectItem>
    </LazySelectContent>
  </Select>
</template>
