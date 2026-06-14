<script lang="ts" setup>
import type { UiProps } from "#layers/lib/app/utils/tw"
import type { UseSidebar } from "~/domain/app/types/layout.types"
import type { ButtonRouteItem, RouteGroup } from "~/types/route.types"
const props = defineProps<{
  group: RouteGroup<ButtonRouteItem>
}>()

const open = shallowRef<boolean>(false)
const group = computed(() => {
  return safeObject(props.group)
})

const slidebar = inject<UseSidebar>("slidebar")
</script>

<template>
  <UCollapsible
    v-model:open="open"
    as="div"
    :ui="{
      root: 'w-full shrink-0 origin-bottom pr-1',
      content:
        'relative ml-4 max-w-full overflow-x-hidden py-1 pr-8 pl-3 before:absolute before:left-0 before:my-auto before:h-[calc(100%-10px)] before:w-px before:border-l before:border-l-p3',
    }">
    <UButton
      :value="group.label"
      trailing-icon="i-up"
      :variant="open ? 'solid' : 'ghost'"
      color="neutral"
      :label="group.label"
      :ui="{
        base: 'group group/slide-btn card-button relative flex h-11! max-h-11! min-h-11! w-full gap-2.5! overflow-hidden rounded-xl px-3! open:opacity-90! hover:opacity-80!',
        leadingIcon: cn('size-4.5', group?.class),
        label:
          'flex grow text-md leading-none font-semibold antialiased drop-shadow-none group-open/btn:text-nc group-hover/btn:text-nc',
        trailingIcon:
          'trailing-rotate **:stroke-[10%]! group-open/btn:opacity-100 group-hover/btn:text-nc!',
      }"
      :icon="group.icon" />
    <template #content>
      <UButton
        v-for="item in asRouteButtonGroup(group).items"
        :key="item.id"
        :avatar="item.avatar"
        :icon="item.icon"
        :label="item.label"
        :to="item.to"
        block
        :ui="{
          base: 'group group/slide-btn card-button relative flex w-full gap-2.5! overflow-hidden rounded-xl px-3! hover:opacity-80!',
        }"
        color="neutral"
        variant="ghost" />
    </template>
  </UCollapsible>
</template>
