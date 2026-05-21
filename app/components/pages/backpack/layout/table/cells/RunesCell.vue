<script lang="ts" setup>
import type { TableRow } from "@nuxt/ui"
import { rowRunes } from "../tableHelpers"

const { row } = defineProps<{
  row: TableRow<Pocket>
}>()
</script>

<template>
  <div
    v-if="rowRunes(row)?.keystone || rowRunes(row)?.secondary.path"
    class="z-1 flex justify-center">
    <div
      class="z-2 size-max rounded-full ring-3 ring-p0 group-hover/row:ring-p2">
      <Tooltip
        v-if="rowRunes(row)?.keystone"
        :avatar="`/img/rune/${rowRunes(row)?.keystone}.webp`"
        as-child
        :text="runeNameById(Number(rowRunes(row)?.keystone))">
        <UAvatar
          :ui="{ root: 'bg-neutral/90 p-1 shadow-sm drop-shadow-sm' }"
          size="lg"
          :src="`/img/rune/${rowRunes(row)?.keystone}.webp`" />
      </Tooltip>
    </div>
    <div
      class="z-1 size-max rounded-full ring-3 ring-p0 group-hover/row:ring-p2">
      <Tooltip
        v-if="rowRunes(row)?.secondary.path"
        :avatar="`/img/path/${rowRunes(row)?.secondary.path}.webp`"
        as-child
        :text="pathNameById(Number(rowRunes(row)?.secondary.path))">
        <UAvatar
          :ui="{ root: 'bg-neutral/90 p-2 shadow-sm drop-shadow-sm' }"
          size="lg"
          :src="`/img/path/${rowRunes(row)?.secondary.path}.webp`" />
      </Tooltip>
    </div>
  </div>
  <span v-else> </span>
</template>
