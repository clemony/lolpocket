<script lang="ts" setup>
import type { UseSidebar } from "~/domain/app/types/layout.types"
import type { RouteGroup, RouteItem } from "~/types/route.types"

const props = defineProps<{
  group: RouteGroup<RouteItem>
}>()

const slidebar = inject<UseSidebar>("slidebar")
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
        color="neutral"
        size="xl"
        :label="item.label"
        :icon="item?.iconFill || item?.icon"
        :ui="{
          base: cn(
            'relative flex size-full w-full justify-start gap-2.5! overflow-hidden rounded-xl border-0 bg-n2/96! px-4! py-3! text-nc shadow-sm inset-ring inset-ring-n5 fx-0 **:text-nc! hover:bg-n3!'
          ),
          label:
            'flex text-lg leading-none font-bold antialiased drop-shadow-none',
          leadingIcon: cn('fill-icon size-4.5!', item.ui?.leadingIcon, {}),
        }"
        @click="slidebar?.close({ to: item?.to, onClick: item?.onClick })" />
    </div>
  </div>
</template>
