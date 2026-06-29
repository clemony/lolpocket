<script lang="ts" setup>
import type { TableRow } from "@nuxt/ui"

const { row } = defineProps<{
  row: TableRow<Pocket>
}>()
</script>

<template>
  <div
    v-if="(row.getValue('spells') as number[]).filter(Boolean).length"
    class="z-1 flex flex-row-reverse justify-center">
    <div
      v-for="spell in row.getValue('spells')"
      :key="spell"
      class="z-1 size-max rounded-full ring-3 ring-p0 group-hover/row:ring-p2">
      <Tooltip
        v-if="spell"
        :avatar="{ src: `/img/spell/${spell}.webp` }"
        as-child
        :label="spellNameById(Number(spell))">
        <UAvatar
          :ui="{ root: 'shadow-sm drop-shadow-sm' }"
          size="lg"
          :src="`/img/spell/${spell}.webp`" />
      </Tooltip>
    </div>
  </div>
  <span v-else></span>
</template>
