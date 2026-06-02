<script lang="ts" setup>
import type { RouteGroup, RouteItem } from "~/types/route.types"
const props = defineProps<{
  group: RouteGroup<RouteItem> | undefined
}>()

const open = shallowRef<boolean>(false)
const group = computed(() => safeObject(props.group))
const merge = computed(() =>
  mergeUi(
    {
      trailingIcon: "trailing-rotate **:stroke-[10%]! open:opacity-100"
    },
    props?.group?.ui
  )
)
</script>

<template>
  <UCollapsible
    v-model:open="open"
    as="div"
    :ui="{
      root: 'w-full shrink-0 origin-bottom pr-1',
      content:
        'relative ml-4 max-w-full overflow-x-hidden py-1 pr-8 pl-3 before:absolute before:left-0 before:my-auto before:h-[calc(100%-10px)] before:w-px before:border-l before:border-l-p3'
    }">
    <CommandButton
      :value="group.label"
      :item="{
        ...group,
        variant: open ? 'solid' : 'ghost',
        color: open ? 'neutral' : 'secondary',
        ui: merge
      }" />
    <template #content>
      <CommandButton
        v-for="item in group.items"
        :key="item.id"
        :value="item.value"
        :item="item" />
    </template>
  </UCollapsible>
</template>
