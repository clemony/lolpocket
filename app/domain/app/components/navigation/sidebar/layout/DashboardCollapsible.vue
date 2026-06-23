<script lang="ts" setup>
import type { ButtonProps, CollapsibleProps } from "@nuxt/ui"
import type { ButtonRouteItem, RouteGroup } from "~/types/route.types"

const {
  group,
  description = true,
  defaultOpen = true,
} = defineProps<
  CollapsibleProps & {
    group: RouteGroup<ButtonRouteItem>
    description?: boolean
  }
>()
</script>

<template>
  <UCollapsible
    :default-open
    :ui="{
      root: 'w-full',
      content:
        'relative flex max-h-max max-w-full grow flex-col overflow-hidden pt-px',
    }">
    <slot>
      <UButton
        size="xl"
        variant="ghost"
        trailing-icon="i-down"
        color="base"
        :ui="{
          leadingIcon: cn('size-4.5', group?.class),
          base: 'hover:after:scale-x-full relative h-max! w-full justify-between overflow-visible p-0 pr-2! text-left after:absolute after:bottom-0 after:h-px after:opacity-0 hover:inset-ring-0 hover:after:bg-p4 hover:after:opacity-100 hover:after:transition-transform hover:after:duration-300 hover:after:ease-in-out',
          trailingIcon:
            'trailing-rotate size-4 opacity-50 group-hover/btn:opacity-100',
        }">
        <RouteDescription
          :ui="{
            root: 'pl-1.5',
            name: 'hidden text-lg transition-discrete duration-200 group-hover/btn:underline @min-[150px]:block @min-[150px]:opacity-100',
            description: 'hidden @min-3xs:block',
          }"
          :folder="group" />
      </UButton>
    </slot>

    <template #content>
      <UButton
        v-for="(item, is) in group.items"
        :key="is"
        :avatar="item?.avatar"
        size="lg"
        variant="ghost"
        :icon="item?.icon"
        :ui="{
          label: 'text-md!',
          base: 'grow gap-2.5 rounded-3xl hover:border-0! hover:shadow-none hover:inset-ring-0 hover:drop-shadow-none hover:fx-0!',
          leadingIcon: cn('size-4.5', item?.class),
        }"
        :label="item?.label"
        :to="item?.to"></UButton>
    </template>
  </UCollapsible>
</template>
