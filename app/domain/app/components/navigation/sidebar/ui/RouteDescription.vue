<script lang="ts" setup>
import type { UserProps } from "@nuxt/ui"
import type { RouteGroup, RouteItem } from "~/types/route.types"

const props = defineProps<
  UserProps & {
    folder?: RouteGroup<RouteItem>
  }
>()

const delegated = reactiveOmit(props, "class", "folder")
</script>

<template>
  <UUser
    v-bind="delegated"
    size="xl"
    :ui="{
      ...props.ui,
      root: cn(
        'ml-1.25 py-2 pr-6',
        folder?.description || props.description ? 'mb-1' : '',
        props.ui?.root
      ),
      name: cn('mb-1', props.ui?.name),
    }"
    :name="folder?.label || props.name"
    :description="folder?.description || props.description" />
</template>
