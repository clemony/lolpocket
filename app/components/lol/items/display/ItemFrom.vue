<script lang="ts" setup>
const { from, gold } = defineProps<{
  from: ItemComponent[]
  gold: number
}>()
</script>

<template>
  <div
    v-if="from"
    class="mt-1">
    <div
      class="divider divider-start text-0! after:h-px">
      RECIPE
    </div>

    <div class="group flex items-center gap-3 px-1 pt-2">
      <div
        v-for="(item, i) in from"
        :key="i"
        :title="`${item.name} ‑ ${item.gold}g`"
        class="flex items-center gap-3">
        <Item
          :id="item.id"
          class="
            size-10 hover-ring overflow-hidden rounded-lg shadow-sm
            ring-neutral/60
          " />

        <icon
          v-if="i !== from.length - 1"
          name="dashicons:plus"
          class="size-3.5 opacity-80" />
      </div>

      <div
        v-if="gold"
        class="flex items-center">
        <icon
          name="dashicons:plus"
          class="size-3.5 opacity-80" />

        <img
          src="/img/icons/gold-coin.webp"
          alt="coin"
          class="mr-1 ml-3 size-4.25 opacity-80" />
        {{ gold }}
      </div>
    </div>
  </div>
</template>
