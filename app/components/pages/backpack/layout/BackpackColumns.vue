<script lang="ts" setup>
import { vDraggable } from "vue-draggable-plus"
import type { PocketButton } from "~/domain/pocket/ui/pocketFolderItems"
import { usePocketFolders } from "~/domain/pocket/ui/pocketFolderItems"
import { toolbarItems } from "~/domain/pocket/ui/toolbarItems"

const folders = usePocketFolders()
</script>

<template>
  <UPage class="size-full">
    <UPageBody class="mx-auto size-full max-w-(--ui-container)">
      <template v-if="folders">
        <UPageGrid
          v-for="(folder, i) in folders"
          :id="folder.id"
          :key="i"
          v-draggable="[
            folder,
            {
              group: 'pocket',
              ghostClass: 'bg-p3 rounded-lg',
              animation: 1,
              sort: true,
              ease: 'ease-in-out'
            }
          ]"
          class="transition-all duration-300 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div v-for="item in folder.children" :key="item.pocket.key">
            <LazyBackpackPocketCard v-if="item.pocket" :pocket="item.pocket" />
          </div>
        </UPageGrid>
      </template>
      <div v-else class="relative grid size-full place-items-center">
        <UEmpty
          data="expanded"
          size="lg"
          :ui="{
            root: 'absolute top-1/4 px-14! pt-10!',
            title: 'mb-1',
            description: 'text-n5'
          }"
          title="Backpack empty"
          variant="outline"
          description="Highly upsetting, but fixable.">
          <template #actions>
            <UButton
              v-bind="toolbarItems.new"
              label="New"
              class="h-9 max-h-9 rounded-lg" />
          </template>
        </UEmpty>
      </div>
    </UPageBody>
  </UPage>
</template>
