<script lang="ts" setup>
import type { PocketButton } from "~/domain/pocket/ui/pocketFolderItems"

const { items } = defineProps<{
  items: ComputedRef<PocketButton[]>
}>()
</script>

<template>
  <UPage>
    <UPageBody class="mx-auto max-w-(--ui-container)">
      <template v-if="items && items?.value.length">
        <UPageColumns v-for="(item, i) in items.value" :id="item.id" :key="i">
          <template v-for="child in item.children" :key="child.id">
            <LazyBackpackPocketCard
              v-if="child.pocket"
              :pocket="child.pocket" />
          </template>
        </UPageColumns>
      </template>
      <div v-else class="grid size-full place-items-center">
        <UEmpty icon="" title="Backpack empty"> </UEmpty>
      </div>
    </UPageBody>
  </UPage>
</template>
