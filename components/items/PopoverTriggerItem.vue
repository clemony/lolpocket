<script lang="ts" setup>
const props = defineProps<{
item: Item
i: number
}>()
</script>

<template>
<PopoverTrigger :key="i" class="group/b">
      <LazyItem
        :item="item"
v-if="item.name != ''"
        class="shadow-sm shrink-0 !size-20 "
        :class="{ 'rotate-out-center': removingItems[item?.id ?? `item-${i}`],}"
        @click.prevent="is.selectedItem = item" />

        <label v-else class="!size-20 btn no-drag ">
<icon name="search" class="size-4 text-bc/50 group-hover/b:text-bc" />
        </label>
        </PopoverTrigger>

        <PopoverContent>

        </PopoverContent>
</template>