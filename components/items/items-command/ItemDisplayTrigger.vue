<script lang="ts" setup>
const props = defineProps<{
item: Item
}>()
</script>

<template>
    <PopoverTrigger as-child>
      <button class="size-20  group/b hover:ring hover:ring-neutral/40 rounded-lg ring-offset-2 hover:ring-offset-b1 data-[state=open]:ring-neutral/40  data-[state=open]:ring  data-[state=open]:ring-offset-b1  " :class="{ 'shadow-sm shadow-black/20 inset-shadow-sm border border-black/60': item.name != '' }">
        <LazyItem
          v-if="item.name ?? ''"
          :key="item.name"
          :item="item"
          class="shrink-0   overflow-hidden pointer-events-none rounded-field " basic />

        <div v-else class="!size-20 btn no-drag group-data-[state=open]/b:!bg-b3 tldr-20">
          <icon name="search" class="size-4 text-bc/70 group-hover/b:text-bc group-data-[state=open]/b:text-bc" />
        </div>
      </button>
    </PopoverTrigger>
</template>