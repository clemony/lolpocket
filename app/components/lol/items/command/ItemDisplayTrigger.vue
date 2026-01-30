<script lang="ts" setup>
const props = defineProps<{
  itemId: number | null
}>()
</script>

<template>
  <PopoverTrigger class="size-20" @click.stop>
    <button
      class="group/b hover:ringneutral/40 data-[state=open]:ringneutral/40 pointer-events-none! size-full rounded-lg open:ring open:inset-shadow-sm hover:ring hover:inset-shadow-sm"
      :class="{
        'border border-black/60 shadow-sm inset-shadow-sm shadow-black/20':
          itemId,
      }"
    >
      <LazyItem
        v-if="itemId ?? ''"
        :id="props.itemId"
        :key="props.itemId"
        class="pointer-events-none! shrink-0 overflow-hidden rounded-field **:pointer-events-none"
        :alt="itemNameById(itemId)"
        basic
      />

      <div
        v-else
        class="no-drag tldr-30 btn pointer-events-none! size-20! group-open/b:bg-b1/60! group-hover/b:bg-b1/60!"
      >
        <icon
          class="pointer-events-none! size-4 text-bc/70 group-open/b:text-bc group-hover/b:text-bc"
          name="search"
        />
      </div>
    </button>
  </PopoverTrigger>
</template>
