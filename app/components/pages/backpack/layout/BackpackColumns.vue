<script lang="ts" setup>
import type { TreeItemExt } from "~/domain/pocket/ui/treeItems"

const { items } = defineProps<{
  items: ComputedRef<TreeItemExt[]>
}>()
</script>

<template>
  <UPage>
    <UPageBody class="mx-auto max-w-(--ui-container)">
      <template v-if="items && items?.value.length">
        <UPageColumns v-for="(item, i) in items.value" :id="item.id" :key="i">
          <LazyBackpackPocketCard
            v-for="child in item.children"
            :key="child.id"
            :pocket="child.pocket" />
        </UPageColumns>
      </template>
      <div v-else class="grid size-full place-items-center">
        <UEmpty icon="" title="Backpack empty"> </UEmpty>
      </div>
    </UPageBody>
  </UPage>
</template>
