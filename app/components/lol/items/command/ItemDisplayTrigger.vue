<script lang="ts" setup>
const props = defineProps<{
  itemId: number | null
}>()
</script>

<template>
  <PopoverTrigger
    class="size-20"
    @click.stop>
    <button
      class="
        group/b
        hover:ringneutral/40
        data-[state=open]:ringneutral/40
        !pointer-events-none size-full rounded-lg
        hover:ring hover:inset-shadow-sm
        data-[state=open]:ring data-[state=open]:inset-shadow-sm
      "
      :class="{
        'border border-black/60 shadow-sm inset-shadow-sm shadow-black/20':
          itemId,
      }">
      <LazyItem
        v-if="itemId ?? ''"
        :id="props.itemId"
        :key="props.itemId"
        :alt="ix().itemNameById(itemId)"
        class="
          !pointer-events-none shrink-0 overflow-hidden rounded-field
          **:pointer-events-none
        "
        basic />

      <div
        v-else
        class="
          no-drag tldr-30 btn !pointer-events-none !size-20
          group-hover/b:!bg-b1/60
          group-data-[state=open]/b:!bg-b1/60
        ">
        <icon
          name="search"
          class="
            !pointer-events-none size-4 text-bc/70
            group-hover/b:text-bc
            group-data-[state=open]/b:text-bc
          " />
      </div>
    </button>
  </PopoverTrigger>
</template>
