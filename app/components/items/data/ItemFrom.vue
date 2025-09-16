<script lang="ts" setup>
const { from, gold } = defineProps<{
  from: ItemComponent[]
  gold: number
}>()
</script>

<template>
  <div
    v-if="from"
    class=" mt-1">
    <div class="divider divider-start after:h-px  !text-3xs">
      RECIPE
    </div>

    <div class="group flex items-center px-1 pt-2 gap-3">
      <div
        v-for="(item, i) in from"
        :key="i"
        v-tippy="`${item.name} ‑ ${item.gold}g`"
        class="flex gap-3 items-center">
        <LazyPopoverItem
          :id="item.id"
          class="ring-neutral/60  size-10 overflow-hidden rounded-lg shadow-sm hover-ring" />

        <icon
          v-if="i != from.length - 1"
          name="dashicons:plus"
          class=" opacity-80 size-3.5" />
      </div>

      <div
        v-if="gold"
        class="flex items-center  ">
        <icon
          name="dashicons:plus"
          class=" opacity-80 size-3.5" />

        <Img
          img="/img/icons/gold-coin.webp"
          alt="coin"
          class="size-4.25 ml-3 opacity-80 mr-1" />
        {{ gold }}
      </div>
    </div>
  </div>
</template>