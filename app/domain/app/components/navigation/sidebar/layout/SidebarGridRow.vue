<script lang="ts" setup>
import type { UseSidebar } from "~/domain/app/types/layout.types"
import type { RouteGroup, RouteItem } from "~/types/route.types"

const props = defineProps<{
  group: RouteGroup<RouteItem>
}>()

const sidebar = inject<UseSidebar>("sidebar")
</script>

<template>
  <div class="w-full">
    <RouteDescription :description="group.description" :name="group.label" />
    <div
      v-if="group"
      class="grid w-full grid-cols-2 gap-x-1.5 gap-y-2 pt-1 pr-1">
      <UButton
        v-for="item in group.items"
        :key="item.label"
        size="lg"
        variant="ghost"
        :label="item.label"
        :icon="item?.icon"
        :ui="{
          base: cn(
            'gap-2.5 rounded-xl hover:shadow-none hover:drop-shadow-none hover:fx-0!'
          ),
          label: 'text-md font-semibold',
          leadingIcon: cn('size-4.5!', item.ui?.leadingIcon, item.class || {}),
        }"
        @click="sidebar?.close({ to: item?.to, onClick: item?.onClick })" />
    </div>
  </div>
</template>
