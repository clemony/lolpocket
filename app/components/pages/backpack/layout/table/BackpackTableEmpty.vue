<script lang="ts" setup>
import { backpackFolders } from "~/domain/pocket/folder/defaultFolders"
import type { IconSet } from "~~/layers/ui/app/assets/icons/icon-sets"

const { item, icon } = defineProps<{
  item: Folder
  icon: IconSet | undefined
}>()

const isDefault = computed(() =>
  Object.keys(backpackFolders)
    .filter((k) => k !== "folders")
    .includes(item.id)
)

const message: string | undefined = {
  favorites: "When you favorite another player's pocket",
  archive: "If you archive your pockets",
  trash: "If you delete your pockets"
}[item.id]

const suffix = computed(() =>
  isDefault.value
    ? ""
    : item.id === "trash"
      ? "Trashed pockets will be removed after 30 days."
      : "Add one now?"
)

const description = computed(() => {
  return `${message ?? "When new pockets are added to this folder"}, they'll show up here. ${suffix.value}`
})
</script>

<template>
  <UEmpty
    :ui="{ root: 'group/btn max-w-100' }"
    :title="`${item.label} Empty`"
    :icon="icon?.closed"
    data-state="closed"
    :avatar="{
      ui: {
        icon: icon?.class
      }
    }"
    :description>
    <template v-if="!isDefault" #actions>
      <div class="flex items-center gap-1">
        <NewOptionsMenu
          label="New Pocket"
          :menu="{
            content: { align: 'center', side: 'top' }
          }"
          :options="{
            folder: { disabled: true },
            pocket: { location: item.id }
          }"
          :ui="{
            leadingIcon: 'hidden',
            base: 'pl-5'
          }" />
      </div>
    </template>
  </UEmpty>
</template>
