<script lang="ts" setup>
import type { RouteGroup, RouteItem } from "~/types/route.types"
import { itemKey } from "~/utils/routes/useRouteGroups"

const { reference } = defineProps<{
  reference: RouteGroup<RouteItem>
}>()

const emit = defineEmits<{
  "update:open": [item: RouteItem]
}>()
</script>

<template>
  <div class="w-full max-w-full px-3">
    <div v-if="reference" class="py-2 pl-1">
      <UUser
        size="xl"
        :ui="{ root: 'mb-2 py-2', name: 'mb-1', wrapper: 'pr-6' }"
        :description="reference.description"
        :name="reference.label" />

      <div class="grid w-full grid-cols-2 gap-x-1.5 gap-y-2 pr-7 pl-1">
        <UButton
          v-for="item in reference.items"
          :key="itemKey(item)"
          color="neutral"
          data-command-menu-item="true"
          :label="item.label"
          :icon="item.icon"
          trailing-icon="i-right"
          :ui="{
            base: cn(
              'noise relative flex size-full h-11! w-full justify-start gap-2.5! overflow-hidden rounded-xl border-0 bg-neutral p-3! text-nc shadow-sm **:text-nc! hover:bg-neutral/80'
            ),
            label: 'flex text-lg leading-none font-bold',
            trailingIcon:
              'right-2.5 bottom-3 size-4! opacity-80 **:stroke-[3.1] group-hover/btn:opacity-100',
            leadingIcon: cn('size-4.5!')
          }"
          @click="emit('update:open', item)" />
      </div>
    </div>
  </div>
</template>
