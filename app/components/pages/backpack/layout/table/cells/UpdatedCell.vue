<script lang="ts" setup>
import type { TableRow } from "@nuxt/ui"

const { row } = defineProps<{
  row: TableRow<Pocket>
}>()
</script>

<template>
  <div class="z-2 grid size-full">
    <Tooltip as-child :ui="{ content: 'flex h-max! translate-x-0 gap-3 py-1' }">
      <div class="z-1 grid size-full place-items-center">
        <Checkbox
          :color="
            currentPatchNormalized() === row.getValue('updated') ? 'res' : 'dom'
          "
          :invalid="currentPatchNormalized() !== row.getValue('updated')"
          :checked="currentPatchNormalized() === row.getValue('updated')"
          class="rounded-full" />
      </div>

      <template #content>
        <Icon
          :name="
            currentPatchNormalized() === row.getValue('updated')
              ? 'i-check-circle'
              : 'i-clock'
          "
          class="inline size-10 align-icon text-nc **:stroke-[1.8]" />
        <div class="flex flex-col pr-4">
          <h5 class="align-baseline text-md font-bold">
            Patch {{ row.getValue("updated") }}
          </h5>
          <p class="text-xs italic opacity-90">
            {{
              useDateFormat(
                row.original?.updated.toLocaleString(),
                "MMM DD, YYYY"
              )
            }}
          </p>
        </div>
      </template>
    </Tooltip>
  </div>
</template>
