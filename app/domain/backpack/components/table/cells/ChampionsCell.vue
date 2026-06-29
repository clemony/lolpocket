<script lang="ts" setup>
import type { TableRow } from "@nuxt/ui"

const { row } = defineProps<{
  row: TableRow<Pocket>
}>()
</script>

<template>
  <div class="z-1 flex flex-row-reverse justify-center">
    <Tooltip
      v-for="item in (row.getValue('champions') as string[])
        .slice(0, 3)
        .reverse()"
      :key="item"
      :avatar="{ src: `/img/champion/${champIdByKey(item)}.webp` }"
      as-child
      :label="champNameByKey(item)">
      <div
        :class="
          cn(
            'z-1 size-max rounded-full ring-3 ring-p0 group-hover/row:ring-p2',
            {
              'order-first': item === row.original?._champion,
            }
          )
        ">
        <UAvatar
          size="lg"
          :src="`/img/champion/${champIdByKey(item)}.webp`"
          :ui="{
            root: 'shadow-sm! drop-shadow-sm!',
          }" />
      </div>
    </Tooltip>
  </div>
</template>
