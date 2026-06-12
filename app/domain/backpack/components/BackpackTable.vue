<script lang="ts" setup>
import type { UpdatedCell } from "#components"
import { Icon } from "#components"
import { DragDropProvider } from "@dnd-kit/vue"
import type { TableRow } from "@nuxt/ui"
import type { Table } from "@tanstack/vue-table"
import { useTableInject } from "~/composables/ui/useTableProvider"
import { description } from "~/domain/backpack/composables/helpers/columnHelpers"
import { useBackpackColumns } from "~/domain/backpack/composables/useBackpackColumns"
import { useFolders } from "~/domain/backpack/composables/useFolder"
import { columnOrder, onColumnDragEnd } from "../utils/dragTable"

const { routeFolder } = useFolders()
const { tableApi, rowSelection, columnPinning, columnVisibility, sorting } =
  useTableInject<Pocket>()

const columns = useBackpackColumns()
const { folderIcon } = user()

const children = computed<SortablePocket[]>(() =>
  safeObject(toValue(routeFolder.value.children))
)

const data = computed<SortablePocket[]>(() => {
  return [
    ...children.value,
    ...computed(
      () =>
        toValue(routeFolder.value.subfolders)?.flatMap((f) =>
          toValue(f.children)?.filter(Boolean)
        ) as SortablePocket[]
    ).value
  ]
})

const activePocketItem = ref<Pocket | undefined>()
const contextDisabled = shallowRef<boolean>(false)

const contextOpen = shallowRef<boolean>(false)
const popoverOpen = shallowRef<boolean>(false)

interface TableUtilsExpose {
  close: () => void
  openFromLongPress: (event: MouseEvent | PointerEvent) => Promise<boolean>
}

const tableUtils = useTemplateRef<TableUtilsExpose>("tableUtils")

function onContextmenu(_e: Event, row: TableRow<Pocket>) {
  if (contextDisabled.value) return

  activePocketItem.value = row.original
  if (activePocketItem.value) contextOpen.value = true
}

async function onSelect(e: Event, row: TableRow<Pocket>) {
  row.toggleSelected()
  activePocketItem.value = row.original

  if (e instanceof MouseEvent || e instanceof PointerEvent) {
    await tableUtils.value?.openFromLongPress(e)
  }
}

function getRowId(row: Pocket) {
  return row.key
}

interface UTableExpose<T> {
  tableApi: Table<T>
}

const backpackTable = useTemplateRef<UTableExpose<Pocket>>("backpackTable")
watch(
  () => backpackTable.value,
  (v) => {
    tableApi.value = v?.tableApi ?? null
  },
  { immediate: true }
)
</script>

<template>
  <DragDropProvider @drag-end="onColumnDragEnd">
    <LazyTableUtils
      ref="tableUtils"
      v-model:open="popoverOpen"
      :row-selection="rowSelection"
      :table-api="backpackTable?.tableApi">
      <LazyPocketContextMenu
        v-model:open="contextOpen"
        as-child
        :disabled="contextDisabled || !activePocketItem"
        :pocket="activePocketItem"
        @update:open="contextOpen = $event">
        <UTable
          ref="backpackTable"
          v-model:row-selection="rowSelection"
          v-model:column-order="columnOrder"
          v-model:sorting="sorting"
          v-model:column-visibility="columnVisibility"
          :get-row-id="getRowId"
          :initial-state="{
            rowSelection
          }"
          :column-pinning="columnPinning"
          sticky
          :data
          :columns
          :ui="{
            tbody: 'pocket-table-tbody max-w-full pb-4',
            thead: 'overflow-hidden bg-p0 py-0',
            th: 'max-h-10 bg-p0 py-0 text-center first:pl-3 data-[pinned=left]:z-2',
            tr: cn(
              'group/row px-1 not-has-[th]:h-20',

              'data-[selected=true]:bg-p1',
              'data-[selected=true]:first:rounded-l-lg data-[selected=true]:last:rounded-r-xl'
            ),
            td: cn(
              'z-0 py-0',
              'not-after:z-1 not-data-[pinned=left]:relative',
              'group-hover/row:bg-p2',
              'group-data-[selected=true]/row:data-[pinned=left]:bg-p1',
              'data-[pinned=left]:z-2',
              'group-hover/row:data-[pinned=left]:bg-p2',
              'group-hover/row:group-data-[selected=true]/row:data-[pinned=left]:bg-p2'
            ),
            root: 'tabs-content relative z-0 size-full w-full max-w-full overflow-auto rounded-4xl bg-p0 shadow-sm',
            empty: 'm-auto'
          }"
          @select="onSelect"
          @contextmenu="onContextmenu">
          <!-- LOCATION -->

          <template #location-cell="{ row }">
            <LocationCell :row="row" />
          </template>

          <!-- LABEL -->
          <template #label-cell="{ row }">
            <div class="z-1 grid size-full place-items-center">
              <UUser
                :name="row.original?.label"
                :description="description(row)"
                :ui="{
                  description: 'w-full capitalize',
                  name: 'w-full truncate',
                  root: 'z-1 w-full overflow-hidden py-1',
                  wrapper: 'w-full overflow-hidden'
                }"
                :avatar="{
                  src: getSplashFromSkinKey(row.original?.skin, 'tile'),
                  ui: {
                    image: 'scale-180',
                    root: 'overflow-hidden shadow-sm drop-shadow-sm'
                  },
                  icon: 'i-ui-none'
                }"
                size="lg" />
            </div>
          </template>

          <!-- CHAMPIONS -->
          <template #champions-cell="{ row }">
            <ChampionsCell :row="row" />
          </template>

          <!-- RUNES -->
          <template #runes-cell="{ row }">
            <RunesCell :row="row" />
          </template>

          <!-- ITEMS -->
          <template #items-cell="{ row }">
            <ItemsCell :row="row" />
          </template>

          <!-- SPELLS -->
          <template #spells-cell="{ row }">
            <SpellsCell :row="row" />
          </template>

          <!-- POSITION -->
          <template #position-cell="{ row }">
            <div
              v-if="
                row.getValue('position') && row.getValue('position') !== 'all'
              "
              class="z-1 grid size-full">
              <Tooltip as-child :label="row.getValue('position')">
                <div class="z-1 grid size-full place-items-center">
                  <Icon :name="`i-lp-${row.getValue('position')}`" class="" />
                </div>
              </Tooltip>
            </div>
            <span v-else></span>
          </template>

          <!-- MAP -->
          <template #map-cell="{ row }">
            <div
              v-if="row.getValue('map') && row.getValue('map') !== 0"
              class="z-1 grid size-full">
              <Tooltip as-child :label="mapNameById(row.getValue('map'))">
                <div class="z-1 grid size-full place-items-center">
                  <Icon :name="`i-lp-${row.getValue('map') || 0}`" class="" />
                </div>
              </Tooltip>
            </div>
            <span v-else></span>
          </template>

          <!-- UPDATED -->
          <template #updated-cell="{ row }">
            <UpdatedCell :row="row" />
          </template>

          <!-- PUBLIC -->

          <template #public-cell="{ row }">
            <PublicCell :row="row" />
          </template>

          <!-- TAGS -->
          <template #tags-cell="{ row }">
            <TagsCell :row="row" />
          </template>

          <template #empty>
            <div
              class="absolute inset-0 m-auto grid size-full items-center justify-center">
              <BackpackTableEmpty
                :item="routeFolder"
                :icon="folderIcon(routeFolder.id ?? 'folders')" />
            </div>
          </template>
        </UTable>
      </LazyPocketContextMenu>
    </LazyTableUtils>
  </DragDropProvider>
</template>
