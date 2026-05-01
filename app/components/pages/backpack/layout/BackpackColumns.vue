<script lang="ts" setup>
import type { PocketButton } from "~/domain/pocket/ui/pocketFolderItems"
import { usePocketFolders } from "~/domain/pocket/ui/pocketFolderItems"
import { toolbarItems } from "~/domain/pocket/ui/toolbarItems"

const folders = usePocketFolders()
</script>

<template>
  <UPage class="size-full">
    <UPageBody class="mx-auto size-full max-w-(--ui-container)">
      <template v-if="folders">
        <UPageColumns
          v-for="(item, i) in folders"
          :id="item.id"
          :key="i"
          class="md:columns-2 lg:columns-3 xl:columns-4">
          <template v-for="child in item.children" :key="child.pocket.key">
            <LazyBackpackPocketCard
              v-if="child.pocket"
              :pocket="child.pocket" />
          </template>
        </UPageColumns>
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
