<script lang="ts" setup>
import type { ButtonProps, CollapsibleProps } from "@nuxt/ui"
import type { ButtonRouteItem, RouteGroup } from "~/types/route.types"

const props = withDefaults(
  defineProps<
    CollapsibleProps & {
      group:
        RouteGroup<ButtonRouteItem> | RouteGroup<RouteGroup<ButtonRouteItem>>
      description?: boolean
    }
  >(),
  {
    defaultOpen: true,
  }
)
</script>

<template>
  <UCollapsible
    :default-open
    :ui="{
      root: cn('w-full', props.ui?.root),
      content: cn(
        'relative flex max-h-max max-w-full grow flex-col overflow-hidden pt-px',
        props.ui?.content
      ),
    }">
    <slot>
      <UButton
        size="xl"
        variant="link"
        trailing-icon="i-down"
        :label="group.label"
        color="base"
        :ui="{
          leadingIcon: cn('size-4.5', group?.class),
          base: cn(
            'hover:after:scale-x-full relative h-max! w-full justify-between overflow-visible bg-transparent! py-1.5 pr-2! pl-0.5 text-left after:absolute after:bottom-0 after:h-px after:opacity-0 hover:inset-ring-0 hover:after:bg-p4 hover:after:opacity-100 hover:after:transition-transform hover:after:duration-300 hover:after:ease-in-out'
          ),
          label: 'text-md font-semibold group-hover/btn:underline',
          trailingIcon:
            'trailing-rotate size-4 opacity-50 group-hover/btn:opacity-100',
        }" />
    </slot>

    <template #content>
      <template v-for="(item, is) in group.items" :key="is">
        <DashboardCollapsible
          v-if="asRouteButtonGroup(item).items"
          :default-open="false"
          :ui="{
            root: 'pr-7 pl-3.5',
          }"
          :group="asRouteButtonGroup(item)">
          <UButton
            block
            :avatar="asRouteButton(item)?.avatar"
            size="lg"
            trailing-icon="i-up"
            variant="link"
            :icon="item?.icon"
            :ui="{
              label: 'text-md! group-hover/btn:underline',
              base: 'grow gap-2.5 rounded-3xl hover:border-0! hover:shadow-none hover:inset-ring-0 hover:drop-shadow-none hover:fx-0!',
              leadingIcon: cn('size-4.5', item?.class),
              trailingIcon:
                'trailing-rotate size-4 opacity-50 group-hover/btn:opacity-100',
            }"
            :label="item?.label"
            :to="asRouteButton(item)?.to" />
        </DashboardCollapsible>
        <UButton
          v-else
          :avatar="asRouteButton(item)?.avatar"
          size="lg"
          variant="ghost"
          :icon="item?.icon"
          :ui="{
            label: 'text-md!',
            base: 'grow gap-2.5 rounded-3xl hover:border-0! hover:shadow-none hover:inset-ring-0 hover:drop-shadow-none hover:fx-0!',
            leadingIcon: cn('size-4.5', item?.class),
          }"
          :label="item?.label"
          :to="asRouteButton(item)?.to" />
      </template>
    </template>
  </UCollapsible>
</template>
