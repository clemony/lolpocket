<script lang="ts" setup>
import type { RouteGroup, RouteItem } from "~/types/route.types"
import { itemKey } from "~/utils/routes/useRouteGroups"

const {
  items,
  ui,
  class: className
} = defineProps<{
  items: RouteGroup<RouteItem>
  ui?: RouteItem["ui"]
  class?: HTMLAttributes["class"]
}>()

const emit = defineEmits<{
  "update:open": [item: RouteItem]
}>()
</script>

<template>
  <div v-if="items" :class="cn('w-full py-2', className)">
    <slot>
      <RouteDescription :folder="items" />
    </slot>
    <div class="flex flex-col gap-1">
      <CommandButton
        v-for="item in items.items"
        :key="itemKey(item)"
        :ui
        :value="item.value"
        :item="item"
        @update:open="emit('update:open', item)" />
    </div>
  </div>
</template>
