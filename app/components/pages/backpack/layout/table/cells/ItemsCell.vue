<script lang="ts" setup>
import type { TableRow } from "@nuxt/ui"

const { row } = defineProps<{
  row: TableRow<Pocket>
}>()
</script>

<template>
  <div
    v-if="(row.getValue('items') as number[]).length"
    class="z-1 flex flex-row-reverse justify-center">
    <Tooltip
      v-for="item in row.getValue('items')"
      :key="item"
      :disabled="!item"
      :avatar="`/img/item/${item}.webp`"
      as-child
      :label="itemNameById(item)">
      <div
        class="z-1 size-max rounded-full ring-3 ring-p0 group-hover/row:ring-p2">
        <UAvatar
          size="lg"
          :ui="{
            root: 'shadow-sm! drop-shadow-sm!'
          }"
          :src="item ? `/img/item/${item}.webp` : undefined" />
      </div>
    </Tooltip>
  </div>
  <span v-else></span>
</template>
