<script lang="ts" setup>
import { Icon, UTooltip, UUser } from "#components"
import type { Folder } from "#shared/schema"
import { DragDropProvider } from "@dnd-kit/vue"
import type { DropdownMenuItem, TableRow } from "@nuxt/ui"
import type { Table } from "@tanstack/vue-table"
import { folderActions } from "~/components/pages/backpack/layout/table/tableMenus"
import { useTableInject } from "~/composables/ui/useTableProvider"
import { defaultPocketFolders } from "~/domain/pocket/folder/defaultFolders"
import { useFolders } from "~/domain/pocket/folder/useFolder"
import type { PocketProps } from "~/domain/pocket/types"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"
import { currentPatchNormalized } from "~~/shared/utils/dataHelpers"
import { columns } from "./table/columns"
import { columnOrder, onColumnDragEnd } from "./table/dragTable"
import { rowRunes } from "./table/tableHelpers"

defineProps<{
  folder?: Folder
}>()

const route = useRoute()

const id = asString(route.params.id)

const { routeFolder } = useFolders()
const { tableApi, rowSelection, columnPinning, columnVisibility, sorting } =
  useTableInject<Pocket>()
const { pockets } = storeToRefs(pocketStore())

const data = computed<Pocket[]>(() => {
  if (id === "all") {
    return pockets.value.filter(
      (p: Pocket) => !["trash", "archive"].includes(p.location)
    )
  }

  return (toValue(routeFolder.value.children) ?? [])
    .map((p: PocketProps) => p.pocket)
    .filter((p): p is Pocket => Boolean(p))
})
const { settings } = storeToRefs(user())
const folders = [
  ...Object.values(defaultPocketFolders),
  ...(settings.value?.folders as Folder[])
]

const folderIcon = (location: string) => {
  const key = folders.find((f) => f.id === location)?.iconKey
  if (key) return iconSets[key]
}

const pocketContextItem = ref<Pocket | undefined>()
const contextDisabled = shallowRef<boolean>(false)

const contextOpen = shallowRef<boolean>(false)
function onContextmenu(_e: Event, row: TableRow<Pocket>) {
  if (contextDisabled.value) return

  pocketContextItem.value = row.original
  if (pocketContextItem.value) contextOpen.value = true
}
function onSelect(e: Event, row: TableRow<Pocket>) {
  row.toggleSelected()
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
    <LazyPocketContextMenu
      v-model:open="contextOpen"
      as-child
      :disabled="contextDisabled || !pocketContextItem"
      :item="pocketContextItem"
      @update:open="contextOpen = $event">
      <UTable
        ref="backpackTable"
        v-model:row-selection="rowSelection"
        v-model:column-order="columnOrder"
        v-model:sorting="sorting"
        v-model:column-visibility="columnVisibility"
        :column-pinning="columnPinning"
        sticky
        :data
        :columns
        :ui="{
          tbody: 'pocket-table-tbody pb-4',
          thead: 'overflow-hidden bg-p0 py-0',
          th: 'py-0 text-center first:pl-3',
          tr: 'hover:p1 group/row',
          td: 'py-0 group-data-[selected=true]/row:bg-p2 data-[pinned=left]:group-hover/row:bg-p1 data-[pinned=left]:group-data-[selected=true]/row:bg-p2',
          root: 'tabs-content relative z-0 size-full w-full rounded-4xl bg-p0 shadow-sm',
          empty: 'm-auto'
        }"
        @select="onSelect"
        @contextmenu="onContextmenu">
        <!-- LOCATION -->

        <template #location-cell="{ row }">
          <div class="grid size-full w-16 place-items-center">
            <UDropdownMenu
              v-slot="{ open }"
              :items="folderActions(routeFolder, row)"
              size="md">
              <UButton
                color="base"
                :icon="folderIcon(row.getValue('location'))?.icon"
                :ui="{
                  base: 'rounded-full hover:bg-neutral hover:inset-ring-neutral hover:[&_svg]:text-nc',
                  leadingIcon: folderIcon(row.getValue('location'))?.ui?.open
                }" />
            </UDropdownMenu>
          </div>
        </template>

        <!-- CHAMPIONS -->
        <template #champions-cell="{ row }">
          <div class="flex flex-row-reverse justify-center">
            <Tooltip
              v-for="item in (row.getValue('champions') as string[])
                .slice(0, 3)
                .reverse()"
              :key="item"
              :avatar="`/img/champion/${champIdByKey(item)}.webp`"
              as-child
              :label="champNameByKey(item)">
              <div
                :class="
                  cn('z-1 size-max rounded-full ring-3 ring-p0', {
                    'order-first': item === row.original?._champion
                  })
                ">
                <UAvatar
                  size="lg"
                  :src="`/img/champion/${champIdByKey(item)}.webp`"
                  :ui="{
                    root: 'shadow-sm! drop-shadow-sm!'
                  }" />
              </div>
            </Tooltip>
          </div>
        </template>

        <!-- RUNES -->
        <template #runes-cell="{ row }">
          <div
            v-if="rowRunes(row)?.keystone || rowRunes(row)?.secondary.path"
            class="flex justify-center">
            <div class="z-2 size-max rounded-full ring-3 ring-p0">
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
            <div class="z-1 size-max rounded-full ring-3 ring-p0">
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

        <!-- ITEMS -->
        <template #items-cell="{ row }">
          <div
            v-if="(row.getValue('items') as number[]).length"
            class="flex flex-row-reverse justify-center">
            <Tooltip
              v-for="item in row.getValue('items')"
              :key="item"
              :disabled="!item"
              :avatar="`/img/item/${item}.webp`"
              as-child
              :label="itemNameById(item)">
              <div class="z-1 size-max rounded-full ring-3 ring-p0">
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

        <!-- SPELLS -->
        <template #spells-cell="{ row }">
          <div
            v-if="(row.getValue('spells') as number[]).filter(Boolean).length"
            class="flex flex-row-reverse justify-center">
            <div
              v-for="spell in row.getValue('spells')"
              :key="spell"
              class="z-1 size-max rounded-full ring-3 ring-p0">
              <Tooltip
                v-if="spell"
                :avatar="`/img/spell/${spell}.webp`"
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

        <!-- POSITION -->
        <template #position-cell="{ row }">
          <div
            v-if="
              row.getValue('position') && row.getValue('position') !== 'all'
            ">
            <Tooltip as-child :label="row.getValue('position')">
              <div class="grid size-full place-items-center">
                <Icon :name="`i-lp-${row.getValue('position')}`" class="" />
              </div>
            </Tooltip>
          </div>
          <span v-else></span>
        </template>

        <!-- MAP -->
        <template #_map-cell="{ row }">
          <div v-if="row.getValue('_map') && row.getValue('_map') !== 0">
            <Tooltip as-child :label="mapNameById(row.getValue('_map'))">
              <div class="grid size-full place-items-center">
                <Icon :name="`i-lp-${row.getValue('_map') || 0}`" class="" />
              </div>
            </Tooltip>
          </div>
          <span v-else></span>
        </template>

        <!-- UPDATED -->
        <template #updated-cell="{ row }">
          <div>
            <Tooltip
              as-child
              :ui="{ content: 'flex h-max! translate-x-0 gap-3 py-1' }">
              <div class="grid size-full place-items-center">
                <Checkbox
                  :color="
                    currentPatchNormalized() === row.getValue('updated')
                      ? 'res'
                      : 'dom'
                  "
                  :invalid="
                    currentPatchNormalized() !== row.getValue('updated')
                  "
                  :checked="
                    currentPatchNormalized() === row.getValue('updated')
                  "
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

        <template #empty>
          <div
            class="absolute inset-0 m-auto grid size-full items-center justify-center">
            <BackpackTableEmpty
              :item="routeFolder"
              :icon="folderIcon(routeFolder.id ?? 'all')" />
          </div>
        </template>
      </UTable>
    </LazyPocketContextMenu>
    <!--     <DragOverlay>
      <div>I will be rendered while dragging...</div>
    </DragOverlay> -->
  </DragDropProvider>
</template>
