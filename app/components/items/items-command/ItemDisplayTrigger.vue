<script lang="ts" setup>
const props = defineProps<{
item: Item
}>()
</script>

<template>
    <PopoverTrigger @click.stop class="size-20">
      <button class="size-full  group/b hover:ring hover:ring-neutral/40 rounded-lg  !pointer-events-none   hover:inset-shadow-sm data-[state=open]:ring-neutral/40  data-[state=open]:ring  data-[state=open]:inset-shadow-sm  " :class="{ 'shadow-sm shadow-black/20 inset-shadow-sm border border-black/60': item.name != '' }"  >
        <LazyItem
          v-if="item.name ?? ''"
          :key="item.name"
          :item="item"
          class="shrink-0   overflow-hidden !pointer-events-none **:pointer-events-none rounded-field " basic />

        <div v-else class="!size-20  !pointer-events-none  btn no-drag group-data-[state=open]/b:!bg-b1/60 group-hover/b:!bg-b1/60 tldr-30">
          <icon name="search" class="size-4  !pointer-events-none text-bc/70 group-hover/b:text-bc group-data-[state=open]/b:text-bc" />
        </div>
      </button>
    </PopoverTrigger>
</template>