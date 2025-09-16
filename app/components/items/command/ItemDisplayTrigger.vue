<script lang="ts" setup>
const props = defineProps<{
  itemId: number | null
}>()
const ix = useIndexStore()
</script>

<template>
  <PopoverTrigger
    class="size-20"
    @click.stop>
    <button
      class="size-full group/b hover:ring hover:ringneutral/40 rounded-lg !pointer-events-none hover:inset-shadow-sm data-[state=open]:ringneutral/40 data-[state=open]:ring data-[state=open]:inset-shadow-sm"
      :class="{
        'shadow-sm shadow-black/20 inset-shadow-sm border border-black/60':
          itemId,
      }">
      <LazyItem
        v-if="itemId ?? ''"
        :id="props.itemId"
        :key="props.itemId"
        :alt="ix.itemNameById(itemId)"
        class="shrink-0 overflow-hidden !pointer-events-none **:pointer-events-none rounded-field"
        basic />

      <div
        v-else
        class="!size-20 !pointer-events-none btn no-drag group-data-[state=open]/b:!bg-b1/60 group-hover/b:!bg-b1/60 tldr-30">
        <icon
          name="search"
          class="size-4 !pointer-events-none text-bc/70 group-hover/b:text-bc group-data-[state=open]/b:text-bc" />
      </div>
    </button>
  </PopoverTrigger>
</template>
