<script lang="ts" setup>
import { UButton } from "#components"
import { useBackpack } from "~/domain/backpack/composables/useBackpack"
import { useFolders } from "~/domain/backpack/composables/useFolder"

const { defaults, routeFolder, folders, subfolders } = useFolders()
const { folderId, onFolderUpdate } = useBackpack()

const folderItems = computed(() => [
  ...(defaults.value as SortableFolder[]).map((f) =>
    f.id === "folders"
      ? { ...f, slot: "folders", ui: { trigger: "grow max-w-36! shrink-0" } }
      : {
          ...f,
          slot: "data"
        }
  )
])
</script>

<template>
  <UTabs
    v-model:model-value="folderId"
    :content="false"
    variant="lift"
    :ui="{
      trigger: 'flex h-14 shrink-0 flex-nowrap',
      list: 'shrink-0 justify-end',
      leadingIcon: 'absolute! hidden',
      root: 'w-max shrink-0',
      indicator: 'h-14 rounded-t-3xl [--tab-radius-limit:0.7rem]!'
    }"
    size="xl"
    color="base"
    :items="folderItems"
    value-key="id"
    @update:model-value="onFolderUpdate($event)">
    <template #label="{ item }">
      <UPopover
        v-if="item.id === 'folders'"
        :content="{
          side: 'bottom',
          sideOffset: 12
        }"
        :ui="{
          content:
            'border-t-none! w-70 translate-x-2 py-1.5 pr-1.5 pl-1 shadow-sm drop-shadow-sm drop-shadow-black/6'
        }"
        mode="hover"
        :disabled="!subfolders?.length">
        <UButton
          :label="folders.label"
          :ui="{ base: 'w-32 gap-2 px-3' }"
          size="sm"
          color="transparent">
          <template #trailing>
            <UBadge
              v-if="subfolders?.length"
              size="xs"
              :color="
                /^\/backpack\/folders/.test($route.path) ||
                routeFolder.location === 'folders'
                  ? 'neutral'
                  : 'primary'
              "
              :ui="{
                base: 'mr-1 -translate-y-[0.5px] pr-1.75 pl-1',
                label: 'font-semibold'
              }"
              :label="`+${folders.subfolders?.value.length}`" />
          </template>
        </UButton>

        <template #content>
          <UButton
            icon="i-folder"
            :data-active="/\/backpack\/folders$/.test($route.path)"
            :to="`/backpack/${folders.id}`"
            variant="highlight"
            size="sm_"
            :ui="{
              base: 'mb-px w-full max-w-full justify-start active:bg-p1!'
            }"
            :label="folders.label"
            @click="onFolderUpdate(folders.id)" />
          <div class="max-h-110 w-full pl-3.5">
            <UScrollArea
              :ui="{
                root: 'relative flex w-full max-w-full flex-col gap-y-px overflow-x-hidden pl-1 before:absolute before:left-0 before:h-[calc(100%-var(--spacing)*(2)))] before:w-px before:justify-self-center before:bg-p3'
              }"
              :items="folders.subfolders?.value">
              <template #default="{ item: folder }">
                <UButton
                  :key="folder.id"
                  variant="highlight"
                  size="sm_"
                  :to="`/backpack/${folder.id}`"
                  :label="folder.label"
                  :icon="folder.icons?.icon ?? 'i-folder'"
                  :ui="{
                    label: 'truncate',
                    base: 'w-full max-w-full justify-start',
                    leadingIcon: folder.icons?.class
                  }"
                  @click="onFolderUpdate(folder.id)" />
              </template>
            </UScrollArea>
          </div>
        </template>
      </UPopover>
    </template>
  </UTabs>
</template>
