<script lang="ts" setup>
import type { TreeItemExt } from "~/domain/pocket/ui/treeItems"

const { items } = defineProps<{
  items: ComputedRef<TreeItemExt[]>
}>()
</script>

<template>
  <UPage>
    <UPageBody class="mx-auto max-w-(--ui-container)">
      <UPageColumns
        v-for="(item, i) in items.value"
        :id="item.id"
        :key="i"
        :title="item.label">
        <BackpackPocketCard
          v-for="child in item.children"
          :key="child.id"
          :pocket="child.pocket" />
      </UPageColumns>
    </UPageBody>
  </UPage>
</template>
