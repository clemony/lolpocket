<script lang="ts" setup>
import { useBackpack } from "~/domain/backpack/useBackpack"

const { tableApi } = useBackpack()

const selectedRows = computed(
  () => tableApi.value?.getSelectedRowModel().flatRows
)

watch(
  () => selectedRows.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)

const hasMany = computed(
  () => selectedRows.value && selectedRows.value?.length > 1
)

const tableUtils = computed(() => [
  {
    label: `Move${hasMany.value ? " All" : ""} to...`,
    icon: "i-folder-to",
    onClick: () => {}
  },
  {
    label: `Archive${hasMany.value ? " All" : ""}`,
    icon: "i-archive-restore",
    onClick: () => {}
  },
  {
    label: `Delete${hasMany.value ? " All" : ""}`,
    icon: "i-trash",
    onClick: () => {}
  }
  /*   {
    label: "Share",
    icon: "i-share",
    type: "button",
    onClick: () => {}
  },
  {
    label: "Refresh",
    icon: "i-refresh",
    type: "button",
    onClick: () => {}
  },
  {
    label: "Download",
    icon: "i-download",
    type: "button",
    onClick: () => {}
  } */
])
</script>

<template>
  <div class="flex items-center gap-2">
    <UButton
      v-for="item in tableUtils"
      :key="item.label"
      :disabled="!selectedRows?.length"
      :icon="item.icon"
      :ui="{
        base: 'w-16!',
        leadingIcon:
          'size-4.5 text-pc **:stroke-[2.26] group-disabled/btn:opacity-40 hover:text-nc'
      }"
      variant="ghost" />
  </div>
</template>
