<script lang="ts" setup>
const { from, gold } = defineProps<{
  from: ItemComponent[]
  gold: number
}>()
</script>

<template>
  <div v-if="from" class="mt-1">
    <div class="divider divider-start text-2xs! after:h-px">RECIPE</div>

    <div class="group flex items-center gap-3 px-1 pt-2">
      <div
        v-for="(item, i) in from"
        :key="i"
        class="flex items-center gap-3"
        :title="`${item.name} ‑ ${item.gold}g`">
        <Item
          :id="item.id"
          class="hover-ring size-10 overflow-hidden rounded-lg shadow-sm ring-neutral/60" />

        <icon
          v-if="i !== from.length - 1"
          class="size-3.5 opacity-80"
          name="dasIcons:plus" />
      </div>

      <div v-if="gold" class="flex items-center">
        <icon class="size-3.5 opacity-80" name="dasIcons:plus" />

        <img
          class="mr-1 ml-3 size-4.25 opacity-80"
          src="/img/icons/gold-coin.webp"
          alt="coin" />
        {{ gold }}
      </div>
    </div>
  </div>
</template>
