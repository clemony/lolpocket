<script lang="ts" setup>
import type { TableRow } from "@nuxt/ui"

const { row } = defineProps<{
  row: TableRow<Pocket>
}>()

const { setPocketPublic } = pocketStore()
const modelValue = computed({
  get: () => Boolean(row.original?.public),
  set: (value: boolean) => setPocketPublic(String(row.original?.key), value)
})
</script>

<template>
  <div class="z-2 grid size-full">
    <Tooltip :ui="{ content: 'flex h-max! translate-x-0 gap-3 py-1' }">
      <div class="z-1 grid size-full place-items-center">
        <label
          :for="`row-public-${row.id}`"
          class="group/label z-1 grid size-full cursor-pointer place-items-center before:translate-x-4"
          @click.stop>
          <Checkbox
            :id="`row-public-${row.id}`"
            v-model="modelValue"
            class="rounded-full inset-shadow-xs group-hover/label:ring group-hover/label:ring-p4 checked:border-neutral checked:inset-shadow-nc/40 hover:checked:ring-0!"
            color="neutral"
            aria-label="Make a pocket visible to the community." />
        </label>
      </div>
    </Tooltip>
  </div>
</template>
